import React, { Component, useState, useContext } from 'react';
import { Form, Icon, Input, Button, message,Select } from 'antd/lib/index';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Loading } from '../../shared/modules/Loading/index';
import toastr from 'toastr';
import { Register } from "./service";
import { AuthContext } from "../../shared/components/Context/AuthContext/AuthContext";
import BreadCrumbNCover from "../../BreadCrumbNCover";
// import "../../components/style.less";


const Option = Select.Option;
const FormItem = Form.Item;

const NormalRegisterForm = (props) => {
    const authContext = useContext(AuthContext);

    async function RegisterUser(body) {
        setState({ ...state, isLoading: true });
        try {
            const { data } = await Register(body);
            //authContext.authenticateUser(data.access_token);

            props.history.push('/login');
            toastr.success("User registered successfully", "");

        }
        catch (err) {
            if (err.message == "1")
                toastr.error("User name is already taken", "");
            else
                toastr.error("Email is already taken", "");
        }
        setState({ ...state, isLoading: false });
    }
    const [state, setState] = useState({
        isLoading: false,
    });
    function handleSubmit(e) {

        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                RegisterUser(values);
            }
        });
    }
    const { getFieldDecorator } = props.form;
    return (
      <div>
      <BreadCrumbNCover pageName="SignUp" />
      <div className="container col-md-4 mx:auto" >
            <div style={{ marginTop: "2rem" ,marginBottom: "2rem" }} className="row" >
    
                        <Form onSubmit={(e) => handleSubmit(e)} style={{ width: '100%' }}>
                            <FormItem>
                                {getFieldDecorator('first_name', {
                                    rules: [{ required: true, message: 'First Name is required!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="First Name" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('last_name', {
                                    rules: [{ required: true, message: 'Last Name is required!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Last Name" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('business_name', {
                                    rules: [{ required: true, message: 'Business Name is required!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Business Name" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('business_address', {
                                    rules: [{ required: true, message: 'Business Address is required!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Business Address" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('abn', {
                                    rules: [{ required: true, message: 'ABN is required!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="ABN" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Name is required!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="User Name" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Email is required!' }],
                                })(
                                    <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} type="email"
                                        placeholder="Email" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Password is required!' },
                                     { required:true, pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, message:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" }
                                ],
                                })(
                                    <Input.Password prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                                        placeholder="Password" />
                                )}
                            </FormItem>
                            <FormItem>
                                            {getFieldDecorator('role', {
                                                rules: [{ required: true, message: 'Required' }],
                                                initialValue: "buyer"
                                            })(
                                                <Select
                                                    // style={{ width: '100%' }}
                                                    placeholder="Role"
                                                >
                                                    <Option key="buyer">Buyer</Option>
                                                    <Option key="seller">Seller</Option>
                                                </Select>)}
                                        </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit" className="login-form-button btn-block" style={{backgroundColor:"#0E6251 ",color:"white", height:"40px"}} >
                                    Sign Up
                                </Button>
                                <p className={`text-center mx-auto mb-1`}>or</p>
                                <Link to="login" className="ant-btn login-form-button ant-btn-primary btn-block" style={{backgroundColor:"#0E6251 ",color:"white", height:"40px"}} >Log In</Link>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>

    );
}

const RegisterForm = Form.create()(NormalRegisterForm);

export default (RegisterForm);
