import React, { useState, useContext,useRef, useEffect } from "react";
import "./header.less";
import TopicsNavigation from "../SubNavigations/TopicsNavigation";
import { Affix, Badge } from "antd";
import Context from "../../../Context";
//import InfiniteScroll from 'react-infinite-scroll-component';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from "react-router-dom";
import { CART } from "../../modules/Enums/cartEnums";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { withRouter } from 'react-router-dom';
import { getMenue } from '../../../containers/auth/service';
import { getMenu } from '../../../containers/Admin/prefrences/services';
import { BlackList, getNotifications, ReadAll } from './service';
import { fetchSingleFileSrc } from "../../../containers/Products/product.helper";
import socketIOClient from "socket.io-client";
import Notifications from "./notifications";
import "./cart_styling.css";

import { BASE_URL } from '../../../apis/request';

// import {ShoppingCartOutlined} from '@ant-design/icons';
const Navigation = props => {
    
  const myRef = useRef(null);
    const handleClickOutside = e => {
      var className=typeof e.target.className;
      if(className=='string')
      {
        var id=(e.target.className.split('Hamburger'));
        if(id.length==1)
        {
          setCollapsed(true);
        }
      }
      
      //
    };
  
  
  const authContext = useContext(AuthContext);
  const [collapsed, setCollapsed] = useState(true);

  const { state, dispatch } = useContext(Context);
  const [notifications, SetNotifications] = useState([]);
  const [notificationsState, SetNotificationsState] = useState({
    items: 10,
    hasMoreItems: true
  });
  const [menue, setMenue] = useState([]);
  const [totalNotificatrions, setTotal] = useState(0);

  useEffect(() => {
    

    async function fetchData() {
      console.log("Page Reload");
      if (localStorage.getItem('TOKEN') != undefined) {
        GetNotifications(notificationsState.items)
        //const { data } = await getMenue(localStorage.getItem("ID"));

        const socket = socketIOClient(BASE_URL);
        socket.on("FromAPI", (message) => {
          GetNotifications(notificationsState.items);
        });
      }
    }
    fetchData();
    
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  async function GetNotifications(l) {
    const { data } = await getNotifications(l);
    SetNotifications(data.data);
    setTotal(data.total)
    console.log("Notification data", data);
  }
  function calculatTime(element) {
    const Time = new Date(element.createdAt);
    const currentTime = new Date();
    const diffrence = currentTime - Time;
    const seconds = diffrence / 1000;
    var minuts = 0;
    var hours = 0;
    var Days = 0;
    var weeks = 0;
    var returnTime = seconds.toFixed(0) + " seconds";
    if (seconds < 20) {
      returnTime = " just Now";
    }
    if (seconds > 60) {
      minuts = (seconds / 60);
      returnTime = minuts.toFixed(0) + " minutes";
    }
    if (minuts > 60) {
      hours = (minuts / 60);
      returnTime = hours.toFixed(0) + " hours";
    }
    if (hours > 24) {
      Days = (hours / 24);
      returnTime = Days.toFixed(0) + " days";
    }
    if (Days > 7) {
      weeks = (Days / 7);
      returnTime = weeks.toFixed(0) + " weeks";
    }
    return returnTime;
  }

  function loadMore() {
    if (notificationsState.items === 40) {
      SetNotificationsState({ ...notificationsState, hasMoreItems: false });
    }
    else {
      setTimeout(async () => {
        await GetNotifications(notificationsState.items + 10);
        SetNotificationsState({ ...notificationsState, items: notificationsState.items + 10 });
      }, 3000);
    }
  }

  async function onHover() {
    console.log("Hover");
    if (localStorage.getItem('TOKEN') != undefined) {
      const resp = await ReadAll(notificationsState.items);
      SetNotifications(resp.data.data);
      console.log("Notification data", resp.data);
      setTotal(resp.data.total)
    }
  }
  function addQuantity(_id) {
    dispatch({ type: CART.ADD_QUANTITY, _id });
  }
  function subtractQuantity(_id) {
    dispatch({ type: CART.SUBTRACT_QUANTITY, _id });
  }
  function NavigateToAdminPanel() {
    let permissions = JSON.parse(localStorage.getItem("PERMISSIONS"));
    let permission = permissions[0];
    props.history.push(`/admin/${permission}`);
  }
  function logout() {
    BlackList();
    authContext.logoutUser();
    props.history.push('/');
  }
  return (
    // style={{ position: 'fixed', marginBottom: '104.2pxpx', width: '100%', height: '104.2px', zIndex: '10' }}
    <Affix >
      <header id="header" className="text-uppercase">
        <div className="header-container">
          <div className="position-relative">
            {/* <div className="flex-shrink-0">
              <a href="/" className="logo-holder">
                <img src={logo} alt="Zo" className="img-fluid" />
              </a>
            </div> */}
            <div className="col">
              <nav id="nav" className="navbar navbar-expand-lg text-md-right">
                <div className="d-none d-lg-block">
                  <Link to={"/"} className="logo-holder">
                    <img
                      src='/images/logo2.png'
                      alt="Zo"
                      className="img-fluid"
                      style={{ width: "50px" }}
                    />
                  </Link>
                </div>
                <button
                  className={
                    "navbar-toggler ml-auto first-button outline-none shadow-none Hamburger"
                  }
                  type="button"
                  data-toggle="collapse"
                  data-target="#mainnavbarDropdown"
                  aria-controls="mainnavbarDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => {
                    setCollapsed(!collapsed);
                  }}
                >
                  <div  className="animated-icon1 Hamburger">
                    <span className="Hamburger"></span>
                    <span className="Hamburger"></span>
                    <span className="Hamburger"></span>
                  </div>
                </button>
                <span className=" d-lg-none text-right banner-head" style={{marginRight:'90px',marginBottom:'-2px'}}>
                  <div> <h1 className="text-uppercase m-0 mt-0" style={{fontSize:'20 !important'}}>zo organized</h1></div>
                  <div style={{marginTop:'-13px',marginRight:'-25px'}}> <span className="text-secondary" >Life. Simplified.</span></div>
                </span>
                <div
                  className={
                    (collapsed ? "collapse p-3 p-md-0 " : "") +
                    "navbar-collapse justify-content-end p-3 p-md-0 Hamburger"
                  }
                  id="mainnavbarDropdown"
                >
                  <div className="d-inline-block d-lg-none">
                    <Link to={"/"} className="logo-holder">
                      <img
                        src='/images/logo2.png'
                        alt="Zo"
                        className="img-fluid"
                        style={{ width: "50px" }}
                      />
                    </Link>
                  </div>

                  <ul className="navbar-nav main-nav align-items-lg-center">
                    {/*<li className="nav-item">*/}
                    {/*  <Link className="nav-link" to={"/app"}>*/}
                    {/*    ZO App*/}
                    {/*  </Link>*/}
                    {/*</li>*/}
                    <li className="nav-item">
                      <Link className="nav-link" to={"/about"}>
                        about zo
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/systems/home"}>
                        zo systems
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                      <div className="nav-link user-link">
                        <li className="nav-item">
                          <Link className="nav-link" to={"/zoblog"}>
                            blog
                      </Link>
                        </li>
                        {!authContext.checkAuthentication() ? '' : menue.length > 0 ?
                          <div className="user-popup dropdown-menu-left">
                            <div className="user-holder">
                              <ul className="" >
                                {menue ? menue.map((element, index) => (

                                  <li>
                                    <Link className="nav-link" to={`/userPage${element.url}`}>
                                      {element.name}
                                    </Link>
                                  </li>

                                )) : ''}
                              </ul>
                            </div>
                          </div>
                          : ''}
                      </div>
                    </li> */}
                    <li className="nav-item">
                      <div className="nav-link">
                        <li className="nav-item">
                          <Link className="nav-link" to={"/zoblog"}>
                            blog
                      </Link>
                        </li>
                        <div className="user-popup" style={{ right: '-150px' }}>
                          <div className="user-holder">
                            <ul className="" >
                              {menue ? menue.map((element, index) => (

                                <li className="nav-item">
                                  <Link className="nav-link" to={`/userPage${element.url}`}>
                                    {element.name}
                                  </Link>
                                </li>

                              )) : ''}
                            </ul>
                          </div>
                        </div>

                      </div>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={"/products"}>
                        products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/"}>
                        zo home
                      </Link>
                    </li>
                  </ul>
                  <div className="d-block d-lg-none">
                    <TopicsNavigation />
                  </div>
                  <ul className="social-links navbar-nav align-items-md-right d-flex">
                    <li className="nav-item">
                      <a
                        title="Mail"
                        className="nav-link"
                        target="_blank"
                        href="mailto:info@zo-organized.com"
                      >
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        title="Facebook"
                        className="nav-link"
                        target="_blank"
                        href="https://www.facebook.com/zoorganized/"
                      >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        title="Instagram"
                        className="nav-link"
                        target="_blank"
                        href="https://www.instagram.com/zoorganized/3"
                      >
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        title="Pinterest"
                        className="nav-link"
                        target="_blank"
                        href="https://www.pinterest.com/zoorganized/"
                      >
                        <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        title="Twitter"
                        className="nav-link" target="_blank" href="https://twitter.com/zo_organized">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        title="Youtube"
                        className="nav-link" target="_blank" href="https://www.youtube.com/">
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>

                </div>

                <form className="search-form d-md-flex d-none">
                  <input
                    type="search"
                    className="form-control border-0"
                    placeholder="SEARCH ..."
                  />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>

                {/* Notifications */}
                {authContext.checkAuthentication() ?
                  <>
                    <div className="nav-link cart-link notify-link mr-md-3 ml-md-3" style={{ marginRight: '-32px' }} onMouseEnter={onHover}>
                      <Badge count={notifications && totalNotificatrions} showZero={false} >
                        <i className="fa fa-bell text-light"></i>
                      </Badge>
                      <div className="cart-popup notify-popup" style={{ minWidth: '500px' }}>
                        <div className="Notification-holder" >
                          <InfiniteScroll
                            loadMore={() => loadMore()}
                            hasMore={notificationsState.hasMoreItems}
                            loader={<div className="loader"> Loading... </div>}
                            useWindow={false}
                          >
                            {notifications && notifications.length > 0 ?
                              notifications.map(element => (
                                <>
                                  <div className="row">
                                    <div style={{ textAlign: 'left' }} className="col-md-9" dangerouslySetInnerHTML={{ __html: element.message }} />
                                    <div className="col-md-3 time">
                                      {calculatTime(element)}
                                    </div>
                                  </div>
                                  <hr></hr>
                                </>
                              )) : ''}
                          </InfiniteScroll>{" "}
                        </div>{" "}
                      </div>
                    </div>
                  </> : ''}


                {/* dropdown */}
                <div className="nav-link user-link mr-1 d-md-none" style={{marginRight:'margin-right: 20px !important'}}>
                  <i className="fa fa-search"></i>
                  <div className="user-popup"
                    style={{ width: "200px" }}>
                    <div className="user-holder">
                      <form className="search-form">
                        <input
                          type="search"
                          className="form-control border-0"
                          placeholder="SEARCH ..."
                        />
                        <button type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>



                <div className="nav-link user-link mr-md-0" style={{ marginRight: '-56px' }}>
                  <i className="fa fa-user"></i>
                  <div className="user-popup">
                    <div className="user-holder">
                      <ul className="user-list text-center">

                        {authContext.checkAuthentication() ?
                          <>
                            <li>
                              <Link to={"/profile"} style={{ 'cursor': 'pointer' }}>Profile</Link>
                            </li>
                            <li className="nav-item" style={{ 'cursor': 'pointer' }}>
                              <a className="nav-link" onClick={() => NavigateToAdminPanel()}>
                                <i
                                  className="fa fa-bullseye"
                                  aria-hidden="true"
                                ></i>{" "}
                              Portal
                            </a>
                            </li>
                          </> : ''}
                        <li>
                          {!authContext.checkAuthentication() ? <Link to={"/login"}>Login</Link> : <div onClick={() => logout()} style={{ color: 'black', 'cursor': 'pointer' }}>Logout</div>}
                        </li>
                        {authContext.checkAuthentication() ? '' : <li>
                          <Link to={"/register"} style={{ 'cursor': 'pointer' }}>Signup</Link>
                        </li>}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="nav-link cart-link mr-md-2"  style={{ marginLeft: '27px' }}>
                  <Badge count={state && state.addedItems && state.addedItems.length} showZero={false}>
                    <i className="fa fa-shopping-cart text-light"></i>
                  </Badge>
                  <div className="cart-popup">
                    <div className="cart-holder">
                      <a className="close-btn d-none" href="#">
                        <i className="fa fa-close"></i>
                      </a>
                      <h2 className="text-left">SHOPPING CART</h2>

                      {state.addedItems.map((item) => (
                        <ul key={item._id} className="cart-list">
                          <li>
                            <figure>
                              <img src={fetchSingleFileSrc(item)} alt="zo" style={{ width: "30px" }} />
                            </figure>
                          </li>
                          <li>
                            <span className="name">{item.title}</span>
                          </li>
                          <li>
                            <span className="qty-title">
                              <i className="fa fa-minus-circle" onClick={() => subtractQuantity(item._id)}></i>
                           &nbsp;
                       {item.quantity}
                       &nbsp;
                         <i className="fa fa-plus-circle" onClick={() => addQuantity(item._id)}></i>
                            </span>
                          </li>
                          <li className="total">
                            <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
                          </li>
                        </ul>
                      ))}


                      <div className="cart-footer">
                        {state.addedItems.length > 0 ?
                          <>
                            <span className="total-amount">TOTAL: <span className="amount">${state.total.toFixed(2)}</span></span>
                            <p>Taxes and shipping calculated at checkout</p>
                            <div className="btn-holder">
                              <Link to={"/view-cart"} className="btn btn-outline">VIEW CART</Link>
                              <Link to={'/checkout'} className="btn">CHECK OUT</Link>
                            </div>
                          </> : <p>NO ITEMS ADDED IN THE CART</p>
                        }
                      </div>
                    </div>
                  </div>
                </div>



              </nav>
              <div className="d-none d-lg-block">
                <TopicsNavigation />
              </div>

            </div>
          </div>
        </div>
      </header>
    </Affix>
  );
};

export default withRouter(Navigation);
