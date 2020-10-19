import React, { Suspense, useContext, useState } from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import { Loading } from "../../shared/modules/Loading";
import { AuthContext } from "../../shared/components/Context/AuthContext/AuthContext";
import { PERMISSIONS } from "../../shared/modules/Enums/PermissionEnums";

import Home from "../../Home";
import Research from "../../Research";
import ContactPage from "../../ContactPage";
import About from "../../About";
import Products, {PRODUCT_URL}  from "../../components/Products/Products"
import Users  from "../../components/Users/Users"
import Categories  from "../../components/Categories/Categories"

import Cart from '../../Cart/index';
import ThankYou from '../../ThankYou';
import Register from "../../components/auth/Register";
import Login from "../../components/auth/Login";
import AddProduct from "../../components/Products/inputForm";
import AddUser from "../../components/Users/inputForm";
import AddCategory from "../../components/Categories/inputForm";

import PrivateRoute from "../../components/private-route/PrivateRoute";
import Dashboard from "../../components/dashboard/Dashboard";
import { GetProducts } from "../../components/Products/service";
import ProductList from '../../shared/Products/index';
import Billingaddress from '../../components/PymentProcess/billingAddress';
import CheckOut from '../../components/PymentProcess/checkOut';
import Shipping from '../../components/PymentProcess/shipping';
import Payment from '../../components/PymentProcess/payment';
import Order from '../../components/Orders/container';
import OrderDetail from '../../components/OrderDetail/container';
import ProductsView from '../../shared/Products/product';
import ShopView from '../../components/OldProducts/Shop';


export const Routes = () => {

  const context = useContext(AuthContext);
  const UserRoute = ({ component: Component, ...rest }) => {
    var value = { ...rest };
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <div>
            <Component
              {...matchProps} />
          </div>
        )}
      />
    );
  };

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(matchProps) =>
          context.authenticateRoute(rest.permission) ? (
            <div>
              <Component {...matchProps} />
            </div>
          ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: matchProps.location },
                }} />
            )} />
    )
  };
  return (

    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          key={"/login"}
          path={"/login"}
          exact={true}
          component={Login}
        /> 

<Route path="/contact" component={ContactPage} />
            <ProtectedRoute
          permission={PERMISSIONS.SHOP} path={PRODUCT_URL} component={ProductList} />    
            <Route path="/about" component={About} />
            <Route path="/research" component={Research} />
            <Route exact path="/" component={Home} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/productsview" component={ProductsView} />
            <Route path="/cart" component={Cart} />
			<Route exact path="/register" component={Register} />
      <Route
          permission={PERMISSIONS.PRODUCTS}  path="/editproduct/:id" component={AddProduct} />
      <Route
          permission={PERMISSIONS.PRODUCTS} exact path="/addproduct" component={AddProduct} />
      <Route
          permission={PERMISSIONS.PRODUCTS} exact path="/productlist" component={Products} />

          <Route
              permission={PERMISSIONS.CATEGORIES}  path="/editCategory/:id" component={AddCategory} />
          <Route
              permission={PERMISSIONS.CATEGORIES} exact path="/addCategory" component={AddCategory} />
          <Route
              permission={PERMISSIONS.CATEGORIES} exact path="/Categorylist" component={Categories} />

          {/* users routes */}
          <Route
              permission={PERMISSIONS.USERS}  path="/editUser/:id" component={AddUser} />
          <ProtectedRoute
              permission={PERMISSIONS.USERS} exact path="/addUser" component={AddUser} />
          <Route
              permission={PERMISSIONS.USERS} exact path="/userList" component={Users} />
          {/* end users routes */}

			<Route exact path="/checkout" component={CheckOut} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/billingaddress" component={Billingaddress} />
      <ProtectedRoute
          permission={PERMISSIONS.ORDERS} exact path="/orders" component={Order} />
      <ProtectedRoute
          permission={PERMISSIONS.ORDERDETAIL} exact path="/orderdetail/:id" component={OrderDetail} />
      <Route exact path="/shipping" component={Shipping} />
      <Route exact path="/shop" component={ShopView} />

        {/*        <Route
          key={"/forgetPassword"}
          path={"/forgetPassword"}
          exact={true}
          component={ForgetPassword}
        />
        <Route
          key={"/resetPassword"}
          path={"/resetPassword"}
          //exact={true}
          component={ResetPassword}
        />

        <ProtectedRoute
          permission={PERMISSIONS.PRODUCTS}
          key={"/admin/products"}
          path={"/admin/products"}
          exact
          component={AdminProductsContainer}
        />
        <ProtectedRoute
          permission={PERMISSIONS.PRODUCTS}
          key={"/admin/orders"}
          path={"/admin/orders"}
          exact
          component={Orders}
        />
        <Route
          key={"/checkout"}
          path={"/checkout"}
          exact={true}
          component={Checkout}
        />


        <Route
          key={"/shipping"}
          path={"/shipping"}
          exact={true}
          component={Shipping}
        />

        <Route
          key={"/payment"}
          path={"/payment"}
          exact={true}
          component={Payment}
        />

        <Route
          key={"/billingaddress"}
          path={"/billingaddress"}
          exact={true}
          component={BillingAddress}
        /> */}
        
      </Switch>
    </Suspense >
  );
};
