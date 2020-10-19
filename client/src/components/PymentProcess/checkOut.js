import React, { useState, useEffect, useContext } from "react";
import { Breadcrumb, Input, Select } from 'antd';
import { Form, Icon, Button, Checkbox } from 'antd/lib';
import { Link } from 'react-router-dom';
import Cart from '../../Cart/cart';
import Context from './../../Context';
import { getShippingInfo, saveShipping } from './service';
import './styles.css';
//import { Loading } from '../../shared/modules/Loading/index';
//import UserLayout from '../../shared/layouts/user';
import BreadCrumbNCover from "../../BreadCrumbNCover";

const Option = Select.Option;
const FormItem = Form.Item;
const Checkout = (props) => {
    //console.log("Props", props);
    const { getFieldDecorator } = props.form;
    const [shipping, setShipping] = useState({
         email: '' ,
            firstName: '',
            lastName: '',
            address: '',
            appartment: '',
            country: '',
            state: '',
            zipCode: '',
        shippingMethod: '',
        customer: '',
        userId: '',
    });
    const { state, dispatch } = useContext(Context);
    const [loading,setLoading]=useState({isLoading:false});
    useEffect(() => {
        async function fetchData() {

            
            localStorage.removeItem('recp');
            localStorage.setItem('checkout', '/checkout')
            if (localStorage.getItem('TOKEN') == undefined) {
                props.history.push('/login');
            }
            else {
                localStorage.removeItem('checkout');
                if (state.addedItems.length > 0) {
                    setLoading({...loading,isLoading:true});
                    const { data } = await getShippingInfo();
                    console.log(data);
                    if (data != null) {
                        setShipping(data);
                    }
                    setLoading({...loading,isLoading:false});
                }
                else {
                    props.history.push('/productlist');
                }
            }
        }
        fetchData();
    }, []);
    async function save(body) {
        setLoading({...loading,isLoading:true});
        const res = await saveShipping(body);
        if (res.status == 200) {
            props.history.push('/shipping');
        }
        setLoading({...loading,isLoading:false});
    }


    function handleSubmit(e) {
        e.preventDefault();

        props.form.validateFields((err, values) => {
            if (!err) {
                const body = {
                    email: values.email ,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        address: values.address,
                        appartment: values.appartment,
                        country: values.country,
                        state: values.state,
                        zipCode: values.zipCode,
                    shippingMethod: shipping.shippingMethod,
                    customer: shipping.customer,
                    userId: shipping.userId,
                }
                save(body);
                //props.history.push('/shipping');
                //console.log(body)
                //props.setCheckOut(values);
            }
        });
    };
    return (
        <div>
        <BreadCrumbNCover pageName="CheckOut" />
       
        <div className="container">
            <br></br>
            <div className="row">
                <div className="col-md-7" style={{ paddingRight: "100px" }}>
                    <div className="">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item style={{ color: 'black' }}>Cart</Breadcrumb.Item>
                            <Breadcrumb.Item style={{ color: 'blue' }}>Information</Breadcrumb.Item>
                            <Breadcrumb.Item>Shipping</Breadcrumb.Item>
                            <Breadcrumb.Item>Payment</Breadcrumb.Item>
                        </Breadcrumb>
                        <br></br>
                        <div className="row">
                            <div className="col-md-6" style={{ float: "left" }}><h6>Contact Information</h6></div>
                            {/* <div className="col-md-6" style={{ float: "right" }}><span style={{ float: "right" }}>Already have an account? <a href="/login">Login</a></span> </div> */}
                        </div>
                        <br>
                        </br>
                        <div>
                        {/* {loading.isLoading ? <Loading /> :     */}
                        <Form id="form" onSubmit={(e) => handleSubmit(e)} style={{ margin: 'auto' }}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <FormItem>
                                            {getFieldDecorator('email', {
                                                rules: [{ required: true, message: 'Required' }],
                                                initialValue: shipping.email
                                            })(
                                                <Input
                                                    placeholder="Email" />
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className="col-md-12">
                                        {getFieldDecorator('uptodateCheck', {
                                            //rules: [{ required: true, message: 'Required' }],
                                            initialValue: ''
                                        })(
                                            <input type="checkBox"></input>)}<span style={{ marginLeft: "15px", verticalAlign: "text-bottom" }} >Keep me up to date on news and exclusive offers</span>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h5>Shipping Address</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <FormItem>
                                            {getFieldDecorator('firstName', {
                                                rules: [{ required: true, message: 'Required' }],
                                                initialValue: shipping.firstName
                                            })(
                                                <Input
                                                    placeholder="First Name" />
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className="col-md-6">
                                        <FormItem>
                                            {getFieldDecorator('lastName', {
                                                rules: [{ required: true, message: 'Required' }],
                                                initialValue: shipping.lastName
                                            })(
                                                <Input
                                                    placeholder="Last name" />
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className="col-md-12">
                                        <FormItem>
                                            {getFieldDecorator('address', {
                                                rules: [{ required: true, message: 'Required' }],
                                                initialValue: shipping.address
                                            })(
                                                <Input
                                                    placeholder="Address" />
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className="col-md-12">
                                        <FormItem>
                                            {getFieldDecorator('appartment', {
                                                //rules: [{ required: true, message: 'Required' }],
                                                initialValue: shipping.appartment
                                            })(
                                                <Input
                                                    placeholder="Appartment,suite,etc.(optional)" />
                                            )}
                                        </FormItem>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <FormItem>
                                            {getFieldDecorator('country', {
                                                rules: [{ required: true, message: 'Required' }],
                                                initialValue: shipping.country
                                            })(
                                                <Select
                                                    style={{ width: '100%' }}
                                                    placeholder="Country/Region"
                                                //defaultValue={shipping.shippingAddress.country}
                                                //onChange={handleChange}
                                                >
                                                    <Option key="US">US</Option>
                                                    <Option key="CA">CA</Option>
                                                    <Option key="PAK">PAK</Option>
                                                </Select>)}
                                        </FormItem>
                                    </div>
                                    <div className="col-md-4">
                                        <FormItem>
                                            {getFieldDecorator('state', {
                                                rules: [{ required: true, message: 'Required' }],
                                                initialValue: shipping.state
                                            })(
                                                <Select
                                                    style={{ width: '100%' }}
                                                    placeholder="State"
                                                //defaultValue={shipping.shippingAddress.state}
                                                //onChange={handleChange}
                                                >
                                                    <Option key="US">US</Option>
                                                    <Option key="CA">CA</Option>
                                                    <Option key="PAK">PAK</Option>
                                                </Select>)}
                                        </FormItem>
                                    </div>
                                    <div className="col-md-4">
                                        <FormItem>
                                            {getFieldDecorator('zipCode', {
                                                rules: [{ required: true, message: 'Required' }],
                                                initialValue: shipping.zipCode
                                            })(
                                                <Input
                                                    placeholder="Zip code" />
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className="col-md-12">
                                        {getFieldDecorator('saveInfoCheck', {
                                            initialValue: ''
                                        })(
                                            <input type="checkBox"></input>
                                        )}<span style={{ marginLeft: "15px", verticalAlign: "text-bottom" }} >Save this information for next time</span>

                                    </div>
                                </div>
                                <br></br>
                                <div className="row">

                                    <div className="col-md-6" >
                                        <Link to="/view-cart">
                                            <FormItem>
                                                <Button style={{ float: "left" }} className="">
                                                    {'<'} Return to cart
                                            </Button>
                                            </FormItem>
                                        </Link>
                                    </div>
                                    <div className="col-md-6">
                                        <FormItem>
                                            <Button type="primary" htmlType="submit" style={{ float: "right" }} className="login-form-button">
                                                Continue Shopping
                                        </Button>
                                        </FormItem>
                                    </div>
                                </div>

                            </Form>
{/* } */}
                        </div>
                    </div>

                </div>
                <div className="col-md-5" style={{ backgroundColor: "#F5F5F5" }}>
                    <div className="container">
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </div >
        </div>
    )
}
const Form1 = Form.create()(Checkout);
export default Form1;
