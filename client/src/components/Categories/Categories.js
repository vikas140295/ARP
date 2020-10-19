import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, Table, Tag } from 'antd';
import { GetUsers, deleteUsers } from "./service";
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import './table.less'
import toastr from 'toastr';
//import { Loading } from '../../../shared/modules/Loading/index';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'antd/dist/antd.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import BreadCrumbNCover from "../../BreadCrumbNCover";
import {GetCategories} from "./service";
import Header from "../../Header";
const { Content, Sider } = Layout;

const Users = () => {
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '',
            key: 'action',
            render: (text, record) => (
                <span>
                    {/*<Link to={`/editproduct/${record.id}`}className="btn btn-info btn-sm ml-5">Edit</Link>*/}
                    <a  aria-disabled onClick={() => deleteRecord(record)} lassName="btn btn-danger btn-sm" style={{color:"white",marginLeft:"20px"}}>Delete</a>
                </span>
            ),
        },
    ];
    const [state, setState] = useState({
        isLoading: false,
    });
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            setState({ ...state, isLoading: true });
            const { data } = await GetCategories();
            setProducts(data);
            setState({ ...state, isLoading: false });
        }
        fetchData();
    }, []);

    async function deleteRecord({ id }) {
        confirmAlert({
          title: 'Confirm',
          message: 'Are you sure you want to delete !',
          buttons: [
            {
              label: 'Yes',
              onClick: ()=>deleteFunction({id})
            },
            {
              label: 'No',
            //   onClick: () => alert('Click No')
            }
          ]
        });
      };

    async function deleteFunction( {id }) {
        setState({ ...state, isLoading: true });
        await deleteUsers(id);
        const { data } = await GetUsers();
        setProducts(data);
        setState({ ...state, isLoading: false });
    }

    return (
        <div>
        <BreadCrumbNCover pageName="Categories List" />
       
        <div className="container">
       
            {/* <Header /> */}
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item>Categories</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                </Breadcrumb>

                    <Link to={'/addCategory'}><Button disabled style={{ float: "right", margin: "10px", zIndex: "4" }} type="primary">Add
                        Category</Button></Link>
                <div className={'shadow my-1 bg-white rounded'}
                >
                    {/* {state.isLoading ? <Loading /> : <Table columns={columns} dataSource={products} />} */}

                    <Table columns={columns} dataSource={products} />

                </div>
            </Layout>
        </div>
        </div>
    )
};
export default Users;
export const PRODUCT_URL = "/products";
