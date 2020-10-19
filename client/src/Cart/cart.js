import React, { useState, useContext } from "react";
import Context from '../Context';
import { CART } from "../shared/modules/Enums/cartEnums";
import { fetchSingleFileSrc } from "../shared/Products/product.helper";
import { Link } from 'react-router-dom';

import './styles.css'
const Cart = () => {
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
    console.log("Added Items", state.addedItems);
    return (<div className="cart-section">
        <div className="container">
            <div className="cart-holder">
                {
                    state.addedItems.map((item) => (
                        <ul className="cart-list">
                            <li>
                                <figure>
                                    <img src={fetchSingleFileSrc(item)} alt="zo" className="img-fluid" />
                                </figure>
                            </li>
                            <li>
                                <span className="name">{item.title}</span>
                                {/* <b className='text-danger' style={{ cursor: 'pointer' }} onClick={() => removeProduct(item._id)}>Remove</b> */}
                            </li>
                            <li>
                                <span className="product-price">${item.price}</span>
                            </li>
                            <li style={{ display: "block" }}>
                                <i className="fa fa-minus-circle" onClick={() => subtractQuantity(item._id)}></i>
                          &nbsp;{item.quantity}&nbsp;
                          <i className="fa fa-plus-circle" onClick={() => addQuantity(item._id)}></i>
                            </li>
                            <li className="total">
                                <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        </ul>
                    ))}

            </div>
            <hr></hr>
            <div className="row">
                <div className="col-md-6">
                    <span className="" style={{ float: "left" }}>Subtotal</span>
                </div>
                <div className="col-md-6">
                    <span className="total-price">${state.total.toFixed(2)}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <span className="" style={{ float: "left" }}>Shipping</span>
                </div>
                <div className="col-md-6">
                    <span className="total-price">Calculated at next step</span>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-md-6">
                    <span className="" style={{ float: "left" }}>Total</span>
                </div>
                <div className="col-md-6">
                    <span className="total-price">${state.total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    </div>)
};
export default Cart;
