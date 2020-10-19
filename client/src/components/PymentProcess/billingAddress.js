import React, { useState, useContext, useEffect } from "react";
import Context from './../../Context';
import { Breadcrumb, Input, Select, Radio } from 'antd';
import { Form, Icon, Button, Checkbox } from 'antd/lib';
import { Link } from 'react-router-dom';
import { CART } from "../../shared/modules/Enums/cartEnums";
import './style.scss';
import { getShippingInfo, postOrder, createOrder } from './service';
import { Loading } from './../../shared/modules/Loading/index';
import BreadCrumbNCover from "../../BreadCrumbNCover";

const Option = Select.Option;
const FormItem = Form.Item;
const BillingAddress = (props) => {

    const { getFieldDecorator } = props.form;

    const { state, dispatch } = useContext(Context);
    const [receiptUrl, setReceiptUrl] = useState('')
    function removeProduct(_id) {
        dispatch({ type: CART.REMOVE_FROM_CART, _id })
    }
    const [loader, setLoader] = useState({
        isLoading: false,
    });
    const [paynow, setPaynow] = useState(false);
    useEffect(() => {
        function fetchData() {
            setReceiptUrl(localStorage.getItem('recp'));
        }
        fetchData();
    }, []);

    async function Order(data) {

        setLoader({ ...loader, isLoading: true });
        const OrderDetail = [];
        state.addedItems.forEach(element => {
            const obj =
            {
                orderId: '',
                prodductId: element.id,
                orderNumber: '',
                price: element.price,
                quantity: element.quantity,
                discount: 0,
                total: element.price,
            }
            //removeProduct(element._id)
            OrderDetail.push(obj);
        });
        const Order = {
            customerId: '',
            orderNumber: '',
            price: state.total.toFixed(2),
            shippingPrice: 0,
            salesTax: 0,
            total: state.total.toFixed(2),
        };
        const body = {
            Order: Order,
            OrderDetail: OrderDetail,
        }

        const getorder = await createOrder(body);
        const orderdata = { amount: state.total.toFixed(2).toString().replace('.', '') };
        const order = await postOrder(orderdata);
        localStorage.setItem('recp', order.data.charge.receipt_url);
        setReceiptUrl(order.data.charge.receipt_url);
        setLoader({ ...loader, isLoading: false });
    }
    async function handleSubmit(e) {
        e.preventDefault();

        props.form.validateFields((err, values) => {
            if (!err) {
                Order();
            }
        });
    };
    function onChange(e) {
        if (e.target.value == 2) {
            setPaynow(true);
            props.history.push('/payment');

            //localStorage.setItem('changeBillingAddress', 'changeBillingAddress');
        }
    };


    if (receiptUrl) {

        state.addedItems.forEach(element => {
            removeProduct(element._id)
        });

        return (
            <div>
        <BreadCrumbNCover pageName="CheckOut" />
       
            <div className="success">
                <h2>Payment Successful!</h2>
                <a href={receiptUrl}>View Receipt</a>
                <Link to="/">Home</Link>
            </div>
            </div>
        )
    }
    return (
<div>
        <BreadCrumbNCover pageName="CheckOut" />
       
        <div className="container">
            <br></br>
            <div className="row">
                {/* {loader.isLoading ? <Loading /> :  */}
                <div className="col-md-6" style={{ paddingRight: "100px" }}>
                    <div className="">
                        <h6 style={{ fontWeight: "300" }}>Billing Address</h6>
                        <p>Select the address that matches your card or payment method</p>
                        <br></br>
                        <div>
                            <Form id="form" onSubmit={(e) => handleSubmit(e)} style={{ margin: 'auto' }}>
                                <div className="card" >
                                    {getFieldDecorator('shippingMethod', {
                                        rules: [{ required: true, message: 'Required' }],
                                        initialValue: 1
                                    })(<Radio.Group onChange={onChange} >
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <Radio value={1}>Same as shipping address
                                        </Radio>
                                            </li>

                                            <li className="list-group-item">
                                                <Radio value={2}>Use different billing address
                                        </Radio>
                                            </li>
                                        </ul>
                                    </Radio.Group>)}
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-md-6" >
                                        <Link to="/shipping">
                                            <FormItem>
                                                <Button style={{ float: "left" }} className="">
                                                    {'<'} Return to shipping
                                            </Button>
                                            </FormItem>
                                        </Link>
                                    </div>
                                    <div className="col-md-6">
                                        <FormItem>
                                            <Button type="primary" htmlType="submit" disabled={paynow} style={{ float: "right" }} className="login-form-button">
                                                Pay now
                                        </Button>
                                        </FormItem>
                                    </div>
                                </div>

                            </Form>

                        </div>
                    </div>

                </div>
                {/* } */}
            </div>
        </div>
    </div>
    )
}
const Form1 = Form.create()(BillingAddress);
export default Form1;
