import React, { Component, useContext, useState } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd/lib/index';
import { withRouter, Link } from 'react-router-dom'
//import "../../components/style.less";
import { TOKEN, PERMISSIONS, ISREMEMBERME, ID } from '../../shared/modules/Enums/PermissionEnums';
import { Login, getMenue } from "./service";
import { AuthContext } from "../../shared/components/Context/AuthContext/AuthContext";
//import { Loading } from '../../shared/modules/Loading/index';
import toastr from 'toastr';
import BreadCrumbNCover from "../../BreadCrumbNCover";
import './styles.css';
const FormItem = Form.Item;

const NormalLoginForm = (props) => {
    const authContext = useContext(AuthContext);
    const [state, setState] = useState({
        isLoading: false,
    });
    var checkout = localStorage.getItem('checkout');
    if (authContext.checkIsRememberMe() && authContext.checkAuthentication()) {
        if (checkout != undefined) {
            localStorage.removeItem('checkout')
            props.history.push("/checkout");
        }
        else {
            let permissions = JSON.parse(localStorage.getItem("PERMISSIONS"));
            let permission = permissions[0];
            let user = JSON.parse(localStorage.getItem("USER"));
            //if (user.role == "admin")
            props.history.push(`/shop`);

            // else
            //     props.history.push('/');
        }
    }
    async function LoginUser(body) {
        setState({ ...state, isLoading: true });
        try {
            const { data } = await Login(body);
            localStorage.setItem("USER", JSON.stringify(data.user));
            localStorage.setItem("TOKEN",data.access_token);
            // toastr.success("Login successfully", "");
            authContext.authenticateUser(data.access_token, data.permissions, body.remember, data._id);
            props.history.push(`/productlist`);
        } catch (err) {
            toastr.error("Email or password is incorrect", "");
        }
        setState({ ...state, isLoading: false });

    }
    function handleSubmit(e) {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {

                LoginUser(values);
            }
            else {
                toastr.error("Email or password is incorrect", "");
            }
        });
    };
    const { getFieldDecorator } = props.form;
    return (
      <div>
	<BreadCrumbNCover pageName="Login" />
  <div className="container col-md-4 mx:auto" >
        <div style={{ marginTop: "2rem" ,marginBottom: "2rem" }} className="row" >
                        <Form onSubmit={(e) => handleSubmit(e)} style={{width:"100%"}}>
                            <FormItem>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Email is required!' }],
                                })(
                                    <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="Email" />
                                )}
                            </FormItem>
                            <FormItem className='input-password'>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Password is required!' }],
                                })(
                                    <Input.Password prefix={<Icon type="lock" style={{ fontSize: 13 }}  />}
                                        placeholder="Password" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <Link to="/forgetPassword" className="login-form-forgot" style={{ float: 'right' }}>Forgot
                                    password?</Link>
                                <div className='clearfix'></div>
                                <Button type="button" htmlType="submit"  className='login-form-button'style={{backgroundColor:"#0E6251 ",color:"white", height:"40px"}} >
                                    Log In
                                </Button>
                                <span style={{paddingLeft:"10px",paddingRight:"10px"}}>or</span> <Button type="button" style={{backgroundColor:"#0E6251 ",color:"white", height:"40px"}} className='login-form-button'><Link to="register">Sign
                                up</Link></Button>
                            </FormItem>
                        </Form>
                        </div>
                        </div>
                                                </div>
    );
}

const LoginForm = Form.create()(NormalLoginForm);

export default withRouter((LoginForm));
