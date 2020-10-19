import React, { useState, useContext } from "react";
import "./styles.css";
import { Rate } from 'antd';
import { NavLink } from 'react-router-dom';
import { fetchSingleFileSrc } from "../../shared/Products/product.helper";
import { CART } from "../../shared/modules/Enums/cartEnums";
import context from './../../Context';

const ProductCards = ({ item }) => {
    const { state, dispatch } = useContext(context);
    function addToCart(_id, quantity) {
        dispatch({ type: CART.ADD_TO_CART, _id, quantity })
    }
    const [compState, setState] = useState({
        quantity: 1
    });
    const onQuantityChangeHandler = (e) => {
        let quantity = e.target.value;
        if (quantity < 0) {
            quantity = 0;
        }
        setState({ ...compState, quantity: quantity });
    }
    const decreaseQuantityHandler = () => {
        let quantity = compState.quantity;
        if (quantity > 1) {
            quantity--;
        }
        setState({ ...compState, quantity: quantity });
    }
    const increaseQuantityHandler = () => {
        let quantity = compState.quantity;
        quantity++;
        setState({ ...compState, quantity: quantity });
    }
    return (
        <div className="card-frame">
            <div className="card-holder">
               <div className='col-frame'>
               <figure>
                    <img
                        src={fetchSingleFileSrc(item)}
                        alt="zo"
                        //className="card-img-top"
                        style={{ height: "165px" }}
                    />
                </figure>

                <div className="text-block">
                    <h3>{item && item.title}</h3>
                    <div className="price-holder">
                        <span className="rating">
                            <Rate disabled defaultValue={5} />
                        </span>
                        <span className="price">${item && item.price}</span>
                    </div>
                    <ul className="check-list d-none">
                        <li>
                            <span className="input-holder">
                                <input checked={item && item.freeVersion} type="radio" readOnly />
                                <label htmlFor="rad1"></label>
                            </span>
                            <div className="txt-holder">
                                <span className="title">Free asdfasdfasdfasdf Version</span>
                                <span className="price">FREE</span>
                            </div>
                        </li>
                        <li>
                            <span className="input-holder">
                                <input checked={item && !item.freeVersion} type="radio" readOnly />
                                <label htmlFor="rad2"></label>
                            </span>
                            <div className="txt-holder">
                                <span className="title">Premium Version</span>
                                <span className="price">${item && item.price}</span>
                            </div>
                        </li>
                    </ul>
                    <div className="counter-holder">
                        <span className="minus" onClick={decreaseQuantityHandler}>-</span>
                        <input type="text" value={compState.quantity} onChange={onQuantityChangeHandler}></input>
                        <span className="plus" onClick={increaseQuantityHandler}>+</span>
                    </div>
                    <a className="btn btn-card" onClick={() => addToCart(item._id, compState.quantity)}>Add to cart</a>
                    <NavLink className="btn btn-view" style={{fontSize:'15px'}} to={`/product/${item && item._id}`}>
                        View full product
                    </NavLink>
                </div>
                </div>
            </div>
        </div>

    );
};

export default ProductCards;
