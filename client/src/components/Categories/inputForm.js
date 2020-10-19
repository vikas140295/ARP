import React, { useState, useEffect } from "react";
import {Form, Icon, Input, Button, Checkbox, Select} from 'antd/lib';
import { Breadcrumb, Layout, Menu, Table, Tag } from 'antd';
//import SideMenu from '../../SideMenu/SideMenu';
import toastr from 'toastr';
//import { Loading } from '../../../shared/modules/Loading/index';
import { Link } from "react-router-dom";
import axios from "axios";
 import './style.css';
import { addUser, updateUser, GetUserById } from "./service";
import { API_URL, ImageUrl } from '../../apis/request';

//import AdminLayout from '../../../shared/layouts/admin';
import 'antd/dist/antd.css';
import BreadCrumbNCover from "../../BreadCrumbNCover";
import {Register} from "../auth/service";
// import { updateMyProfile } from "../Profile/service";
const { Content, Sider } = Layout;
const FormItem = Form.Item;
const InputForm = (props) => {
    let url = props.location.pathname;
    let split = url.split("/");
    let id = split[2];
    const [state, setState] = useState({
        Title: 'Add',
        isLoading: false,
        deleteImages: [],
        images: [],
    });

    const [product, setProduct] = useState({
    });

    const [files, setFiles] = useState([]);
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        async function loadData() {
            if (id != undefined) {
                setState({ ...state, Title: 'Update', isLoading: true });
                const { data } = await GetUserById(id);

                setProduct(data);
                setState({ ...state, id: id, Title: 'Update', isLoading: false });
            }
        }
        loadData();
    }, []);
    const { getFieldDecorator } = props.form;

    async function RegisterUser(body) {
        setState({ ...state, isLoading: true });
        try {
            const { data } = await Register(body);
            //authContext.authenticateUser(data.access_token);
            props.history.push('/userList');
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

    async function handleSubmit(e) {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                RegisterUser(values);
            }
        });
    };


    return (
<div>
        <BreadCrumbNCover pageName="Add User" />
        <Layout>
            <div className="container">
            <Layout style={{ padding: '0 24px 24px' }}>
                <content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <div className='pt-3'>
                        {/* {state.isLoading ? <Loading /> : */}
                        <div className="col-md-4 mx-auto">
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
                                        rules: [{ required: true, message: 'Username is required!' }],
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
                                        Save
                                    </Button>
                                </FormItem>
                            </Form>
                         </div>
                        {/* } */}
                  </div>
                
                    
                    </content>
                    </Layout>
                    </div>
                   </Layout>
    </div>
           
    );
};

const Form1 = Form.create()(InputForm);
export default Form1;
