import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, Table, Tag } from 'antd';
import { getOrderDetailList } from "./service";
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './table.less';
import { API_URL, ImageUrl } from '../../apis/request';
import toastr from 'toastr';
import BreadCrumbNCover from "../../BreadCrumbNCover";
const { Content, Sider } = Layout;

const AdminProducts = (props) => {

    let url = props.location.pathname;
    let split = url.split("/");
    let id = split[2];

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'Title',
            
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Unit Price',
            key: 'Image',
            render: (text, record) => (
                <span>
                    {record.price / record.quantity}
                </span>
            ),
        },
        {
            title: 'Total Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
        },

        {
            title: 'Grand Total',
            dataIndex: 'total',
            key: 'total',
        },
    ];

    const [state, setState] = useState({
        isLoading: false,
    });
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        async function fetchData() {
            setState({ ...state, isLoading: true });
            const { data } = await getOrderDetailList(id);
            console.log(data);
            setOrders(data);
            setState({ ...state, isLoading: false });
        }
        fetchData();
    }, []);

    return (
        <div>
        <BreadCrumbNCover pageName="CheckOut" />

        <div className="container">
        <Layout>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item>Order Detail</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {/* {state.isLoading ? <Loading /> :  */}
                    <Table columns={columns} dataSource={orders} scroll={{ y: 450 }} />
                    {/* } */}
                </Content>
            </Layout>
        </Layout>
</div>
</div>
    )
};
export default AdminProducts;
