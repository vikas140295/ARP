import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, Table, Tag } from 'antd';
import { getOrderList, UpdateOrder } from "./service";
import { Button, Select } from 'antd';
import { Link } from 'react-router-dom'
import './table.less'
import Moment from 'react-moment';
import toastr from 'toastr';
import BreadCrumbNCover from "../../BreadCrumbNCover";
const { Content, Sider } = Layout;
const Option = Select.Option;
const AdminProducts = () => {
    const columns = [
        {
            title: 'Total',
            dataIndex: 'price',
            key: 'price',
            // render: text => <a>{text}</a>,
        },
        // {
        //     title: 'Sales Tax',
        //     dataIndex: 'salesTax',
        //     key: 'salesTax',
        //     // render: text => <a>{text}</a>,
        // },
        // {
        //     title: 'Shipping Price',
        //     dataIndex: 'shippingPrice',
        //     key: 'shippingPrice',
        //     // render: text => <a>{text}</a>,
        // },
        // {
        //     title: 'Grand Total',
        //     dataIndex: 'total',
        //     key: 'total',
        //     // render: text => <a>{text}</a>,
        // },
        {
            title: 'No Of Products',
            dataIndex: 'totalProducts',
            key: 'totalProducts',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Status',
            //dataIndex: 'orderDate',
            key: 'status',
            render: (text, record) => (
                <Select
                    style={{ width: '100%' }}
                    placeholder="Status"
                    value={record.status}
                    //defaultValue={record.status}
                    onChange={(value) => handleChange(value, record)}
                >
                    <Option key={1} value="Pending">Pending</Option>
                    <Option key={2} value="Shipped">Shipped</Option>
                    <Option key={3} value="Delivered">Delivered</Option>
                </Select>
            ),
        },
        {
            title: 'Date',
            //dataIndex: 'orderDate',
            key: 'orderDate',
            render: (text, record) => (
                <span>
                    <Moment format="D MMM YYYY">
                        {record.orderDate}
                    </Moment>
                </span>
            ),
        },
        // {
        //     title: 'Shipped On',
        //
        //     key: 'shipeDate',
        //     render: (text, record) => (
        //         <span>
        //             <Moment format="D MMM YYYY">
        //                 {record.shipeDate}
        //             </Moment>
        //         </span>
        //     ),
        // },

        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Link to={`/orderdetail/${record.id}`}>View Detail</Link>
                </span>
            ),
        },
    ];
    const [state, setState] = useState({
        isLoading: false,
    });
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    async function fetchData() {
        setState({ ...state, isLoading: true });
        const { data } = await getOrderList();
        console.log(data);
        setOrders(data);
        setState({ ...state, isLoading: false });
    }

    function handleChange(value, record) {
        console.log(value, "Record", record);
        const body = {
            Id: record._id,
            status: value,
        };
        update(body);
    }
    async function update(body) {
        const { data } = await UpdateOrder(body)
        await fetchData();
    }

    return (
<div>
        <BreadCrumbNCover pageName="CheckOut" />
       
        <div className="container">
            <Layout>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        <Breadcrumb.Item>Orders</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className={'shadow my-1 bg-white rounded'}>
                        {/* {state.isLoading ? <Loading /> :  */}
                        <Table columns={columns} dataSource={orders} />
                         {/* } */}
                    </div>
                </Layout>
            </Layout>
            </div>
            </div>
    )
};
export default AdminProducts;
