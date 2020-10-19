import React, { useState, useContext } from "react";
import Context from '../Context';
import { CART } from "../shared/modules/Enums/cartEnums";
import { fetchSingleFileSrc } from "../shared/Products/product.helper";
import { Link } from 'react-router-dom';
import BreadCrumbNCover from "../BreadCrumbNCover";
//import UserLayout from '../../shared/layouts/user';
import './styles.css'

const ViewCart = () => {
    const [collapsed, setCollapsed] = useState(true);
    const { state, dispatch } = useContext(Context);
    function addQuantity(_id) {
        dispatch({ type: CART.ADD_QUANTITY, _id })
    }
    function subtractQuantity(_id) {
        dispatch({ type: CART.SUBTRACT_QUANTITY, _id })
    }
    function removeProduct(_id) {
        dispatch({ type: CART.REMOVE_FROM_CART, _id })
    }
    return (
        <div>
        <BreadCrumbNCover pageName="Login" />
      <div className="container" >
            <div style={{ marginTop: "2rem" ,marginBottom: "2rem" }} className="row" >
         
    <div className="cart-section">
        <div className="container">
            <div className="cart-holder">
                <h2 className="text-center rand">SHOPPING CART</h2>
                {
                    state.addedItems.map((item) => (
                        <div>
                        <ul className="cart-items">

                    <li>
                    <img src={fetchSingleFileSrc(item)} alt="zo" className="img-fluid"/>
                    <span className="name">{item.title}</span>
                    <span className="product-price">${item.price}</span>

                    <span>
                    <i className="fa fa-minus-circle" onClick={() => subtractQuantity(item._id)}></i>
                &nbsp;{item.quantity}&nbsp;
                <i className="fa fa-plus-circle" onClick={() => addQuantity(item._id)}></i></span>

                    <span className='text-danger btn-remove d-block float-right' style={{ cursor: 'pointer' }} onClick={() => removeProduct(item._id)}>Remove</span>
                </li>
                            <li className="total text-right pb-2" style={{borderBottom: "1px solid lightgrey"}}>
                                <span className="total-price d-block ml-auto float-right">${(item.price * item.quantity).toFixed(2)}</span>
                                <hr/>
                            </li>
                        </ul>
                        </div>

                    ))}


                <ul className="cart-list totol-list">
                    <li>
                        <span className="subtotal">SUBTOTAL</span>
                    </li>
                    <li className="total">
                        <span className="total-price">${state.total.toFixed(2)}</span>
                    </li>
                </ul>
                <p>Taxes and shipping calculated at checkout</p>
                <div className="btn-holder">
                    <Link to={'/checkout'} className="btn btn-primary">CHECK OUT</Link>
                </div>
            </div>
        </div>
    </div>
   </div>
   </div>
   </div>
    )
};
export default ViewCart;
