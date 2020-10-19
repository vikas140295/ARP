import React, { useState, useReducer, useEffect} from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
//import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import Research from "./Research";
import ContactPage from "./ContactPage";
import About from "./About";
import Products, {PRODUCT_URL}  from "./components/Products/Products"
import { Provider } from "react-redux";
import store from "./store";
// import Cart from './Cart';
import Cart from './Cart/index';
import ThankYou from './ThankYou';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AddProduct from "./components/Products/inputForm";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import { GetProducts } from "./components/Products/service";
import ProductList from './shared/Products/index';
import Billingaddress from './components/PymentProcess/billingAddress';
import CheckOut from './components/PymentProcess/checkOut';
import Shipping from './components/PymentProcess/shipping';
import Payment from './components/PymentProcess/payment';
import Order from './components/Orders/container';
import OrderDetail from './components/OrderDetail/container';
import AuthContextContainer from './shared/components/Context/AuthContext/AuthContextContainer';
import Context from "./Context";
import { Routes } from './routes/Routes/routes';
import { CART } from './shared/modules/Enums/cartEnums';
import 'grapesjs/dist/css/grapes.min.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "bootstrap/dist/css/bootstrap.css"


const CART_STATE = 'ZOREACT_CART';
const cartReducer = (state, action) => {
    
    switch (action.type) {
        case CART.ADD_TO_CART:        
   return addToCart(state, action);
        case CART.REMOVE_FROM_CART:
            return removeFromCart(state, action);
        case CART.ADD_QUANTITY:
            return addQuantity(state, action);
        case CART.SUBTRACT_QUANTITY:
            return subQuantity(state, action);
        case CART.ADD_PRODUCTS:
            return addProducts(state, action);
        default:
            return state;
            
    }
};

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem(CART_STATE);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }; 
  
export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(CART_STATE, serializedState);
    } catch(err) {
      // ignore write errors
    }
  };

function addToCart(state, action) {
    let addedItem = state.items.find(item => item._id === action._id)
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action._id === item._id)
    if (existed_item) {
        addedItem.quantity += action.quantity
        saveState({
            ...state,
            total: state.total + (addedItem.price * action.quantity)
        });
        return {
            ...state,
            total: state.total + (addedItem.price * action.quantity)
        }
    } else {
        addedItem.quantity = action.quantity;
        //calculating the total
        let newTotal = state.total + (addedItem.price * action.quantity)
        saveState({
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: newTotal
        });
        return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: newTotal
        }

    }
}

function removeFromCart(state, action) {
    let itemToRemove = state.addedItems.find(item => action._id === item._id)
    let new_items = state.addedItems.filter(item => action._id !== item._id)

    //calculating the total
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    saveState({...state,
        addedItems: new_items,
        total: newTotal})
    return {
        ...state,
        addedItems: new_items,
        total: newTotal
    }
}

function addQuantity(state, action) {
    let addedItem = state.items.find(item => item._id === action._id)
    addedItem.quantity += 1
    let newTotal = state.total + addedItem.price
    saveState({...state,
        total: newTotal})
    return {
        ...state,
        total: newTotal
    }
}

function subQuantity(state, action) {
    let addedItem = state.items.find(item => item._id === action._id)
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
        let new_items = state.addedItems.filter(item => item._id !== action._id)
        let newTotal = state.total - addedItem.price
        saveState({...state,
            addedItems: new_items,
            total: newTotal})
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    } else {
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.price
        saveState({...state,
            total: newTotal})
        return {
            ...state,
            total: newTotal
        }
    }
}

function addProducts(state, action) {
   saveState({...state,
    items: action.payload})
    return {
        ...state,
        items: action.payload
    }
}

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "./login";
  }
}

const App=()=>  {
  const initialState = {
    items: [],
    addedItems: [],
    total: 0    
};

 const CartValue = loadState();
 console.log(CartValue);
const [state, dispatch] = useReducer(cartReducer, CartValue ? CartValue : initialState) 
useEffect(() => {
    async function fetchData() {
        const { data } = await GetProducts();
        dispatch({ type: CART.ADD_PRODUCTS, payload: data });
    }
    fetchData();
}, [])
    return (
      <Context.Provider
      value={{
          state,
          dispatch,
      }}>
      
        <BrowserRouter>
        <AuthContextContainer>
        <Header />
        <Routes />
          <Footer />
          </AuthContextContainer>
        </BrowserRouter>
   
      </Context.Provider>
    );
}

export default App;

