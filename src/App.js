import React from 'react';
import classes from './App.module.css';
import { Route, Switch } from 'react-router';

import Dashboard from './Routes/Dashboard/Dashboard';
import AddProduct from './Routes/AddProducts/Addproducts';
import ManageProducts from './Routes/ManageProducts/Manageproducts';
import EditProduct from './Routes/Editproduct/Editproduct';
import Signup from './Components/Admin/Auth/Signup';
import Login from './Components/Admin/Auth/Login';

const App = () => {

  
  return (
    <div className={classes.App}>
      <Switch>
        <Route exact path='/admin/login' component={Login} />
        <Route exact path="/admin/signup" component={Signup} /> 
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/add-product" component={AddProduct} />
        <Route exact path="/admin/manage" component={ManageProducts} />
        <Route exact path="/admin/edit-product/:id" component={EditProduct} />
      </Switch>
    </div>
  );
}

export default App;
