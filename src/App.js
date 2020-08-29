import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';

import Dashboard from './AdminRoutes/Dashboard/Dashboard';
import AddProduct from './AdminRoutes/AddProducts/Addproducts';
import ManageProducts from './AdminRoutes/ManageProducts/Manageproducts';
import EditProduct from './AdminRoutes/Editproduct/Editproduct';
import Signup from './Components/Admin/Auth/Signup';
import Login from './Components/Admin/Auth/Login';

import Shop from './UserRoutes/Shop/Shop';
import ProductDetail from './UserRoutes/ProductDetails/Productdetails';
import Contact from './UserRoutes/Contact/Contact';
import Cart from './UserRoutes/Cart/Cart';
import Home from './UserRoutes/Home/Home';

import NotFound from './Components/404/404';

import { useSelector } from 'react-redux';

const App = () => {

  const adminAuth = useSelector(state => state.auth.token);
  
  return (
      <Switch>
          <Route exact path="/shop/top" component={Shop} />
          <Route exact path="/shop/bottom" component={Shop} />
          <Route exact path="/shop/dress" component={Shop} />
          <Route exact path="/shop" component={Shop} />

          <Route exact path="/shop/:id" component={ProductDetail} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart" component={Cart} /> 
          <Route exact path="/" component={Home} />
          

          {adminAuth == null ? <Route exact path='/admin/login' component={Login} /> :
          <Fragment>
              <Route exact path="/admin/signup" component={Signup} /> 
              <Route exact path="/admin/dashboard" component={Dashboard} />
              <Route exact path="/admin/add-product" component={AddProduct} />
              <Route exact path="/admin/manage" component={ManageProducts} />
              <Route exact path="/admin/edit-product/:id" component={EditProduct} /> 
          </Fragment>
          }

          <Route component={NotFound} />
      </Switch>
  );
}

export default App;
