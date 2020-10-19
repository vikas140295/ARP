import React, { useState, useEffect, Component } from "react";
import BreadCrumbNCover from './BreadCrumbNCover';
import { connect } from "react-redux";
import { link } from "react-router-dom";
import { increaseItem, decreaseItem, removeItem } from './actions/cartActions'
import axios from "axios";
import './Cart.css'



const pageName = "Your order";


const getTotalCart = (items) => {
    let total = 0;
    items.forEach(item => total = total + item.sellingPrice * item.quantity);
    return total;
}


//  function Cart(props) 
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            address: ''
        };
    }

    render() {

        const handleIncrease = (id) => {
            console.log(id, 'increase');
            this.props.increaseItem(id);

        }

        const handleDecrease = (id) => {
            console.log(id, 'decrease');
            this.props.decreaseItem(id);

        }

        const handleRemove = (id) => {
            console.log(id, 'remove');
            this.props.removeItem(id);

        }
        const handleChange = (e) => {
            console.log(e.target.id, 'value');
            this.setState({
                [e.target.id]: e.target.value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            let data = {
                items: this.props.items,
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "email": this.state.email,
                "phoneNumber": this.state.phoneNumber,
                "address": this.state.adress
            }
            console.log(data, 'submit data to backend');
/*
           axios.post('https://firetree.azurewebsites.net/api/orders/place', data).then(res =>
		   {
			   
                //'delete local storage'
                localStorage.removeItem("items");

                //'redirect to thank you page'
                this.props.history.push("/thankyou");
                        window.location.reload();
            })
			*/
        }

        console.log(this.props.items,'detail item');
        


        return (
            <div>
                <BreadCrumbNCover pageName={pageName} />
                <div className="px-4 px-lg-0">
                    {/* For demo purpose */}
                    <div className="container text-white py-5 text-center">
                        <h1 className="display-4">Your order detail</h1>

                        <p className="lead mb-0">Please confirm your order with detail shipping address. </p>
                        
                    </div>
                    {/* End */}

                    <div className="pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                    {/* Shopping cart table */}
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="p-2 px-3 text-uppercase">Product</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Price</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Quantity</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Total</div>
                                                    </th>
                                                    <th scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">Remove</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.items.map((item) => {
                                                    console.log(item, 'check data');
                                                    // console.log(item.product.title, 'with product');
                                                    // console.log(item.title, 'without product');


                                                    return (
                                                        <tr>
                                                            <th scope="row" className="border-0">
                                                                <div className="p-2">
                                                                    <img src={item.imageThumbUrl} alt="" width={70} className="img-fluid rounded shadow-sm" />
                                                                    <div className="ml-3 d-inline-block align-middle">
                                                                        <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{item.title}</a></h5><span className="text-muted font-weight-normal font-italic d-block">Category: {item.category.title}</span>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <td className="border-0 align-middle"><strong>{item.sellingPrice} AUD</strong></td>
                                                            <td className="border-0 align-middle"><strong> <span className='adjust-quantity' onClick={() => handleIncrease(item.id)}>+</span> {item.quantity} <span className='adjust-quantity' onClick={() => handleDecrease(item.id)}>-</span></strong></td>
                                                            <td className="border-0 align-middle"><strong>{item.quantity * item.sellingPrice}</strong></td>
                                                            <td className="border-0 align-middle"><i className="fa fa-trash" onClick={() => handleRemove(item.id)} /></td>
                                                        </tr>
                                                    )
                                                }
                                                )}


                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td scope="col" className="border-0 bg-light">
                                                        <div className="p-2 px-3 text-uppercase">Total Cart</div>
                                                    </td>
                                                    <td scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase"></div>
                                                    </td>
                                                    <td scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase"></div>
                                                    </td>
                                                    <td scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase">{getTotalCart(this.props.items)}</div>
                                                    </td>
                                                    <td scope="col" className="border-0 bg-light">
                                                        <div className="py-2 text-uppercase"></div>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    {/* End */}
                                </div>
                            </div>
                            <div className="row py-5 p-4 bg-white rounded shadow-sm">
                                {/*
                                <div className="col-lg-6">
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                                        <div className="input-group mb-4 border rounded-pill p-2">
                                            <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0" />
                                            <div className="input-group-append border-0">
                                                <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2" />Apply coupon</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
                                    <div className="p-4">
                                        <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
                                        <textarea name cols={30} rows={2} className="form-control" defaultValue={""} />
                                    </div>
                                </div>
                            */}
                                <div className="col-lg-6">
                                    <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
                                    <div className="p-4">
                                        <ul className="list-unstyled mb-4">
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>{getTotalCart(this.props.items)}</strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping Fee </strong><strong></strong></li>
                                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                                <h5 className="font-weight-bold">{getTotalCart(this.props.items)}</h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <form>
                                        <div className="form-group">
                                            <label>First name: </label>
                                            <input type="text" className="form-control" id="firstName" placeholder="Enter first name" onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Last name: </label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Enter last name" onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Email address</label>
                                            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => handleChange(e)} />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group">
                                            <label>Phone number: </label>
                                            <input type="text" className="form-control" id="phoneNumber" placeholder="Enter phone number" onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <label>Address: </label>
                                            <input type="text" className="form-control" id="address" placeholder="Enter detail address" onChange={(e) => handleChange(e)} />
                                        </div>

                                        <button onClick={(e) => handleSubmit(e)} className="btn btn-dark rounded-pill py-2 btn-block">Place order</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        items: state.carts.items,
    };
};

export default connect(mapStateToProps, { increaseItem, decreaseItem, removeItem })(Cart);

// <div>
//     <form >
//         <label>First name: <input type="text" aria-describedby="button-addon3" className="form-control border-0" id='firstName' onChange={(e) => handleChange(e)} />
//         </label>

//         <input type="text" aria-describedby="button-addon3" className="form-control border-0" id='lastName' onChange={(e) => handleChange(e)} />
//         <input type="text" placeholder="Phone number" aria-describedby="button-addon3" className="form-control border-0" id='phoneNumber' onChange={(e) => handleChange(e)} />
//         <input type="text" placeholder="Email" aria-describedby="button-addon3" className="form-control border-0" id='email' onChange={(e) => handleChange(e)} />
//         <button onClick={(e) => handleSubmit(e)} className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</button>
//     </form>

// </div>