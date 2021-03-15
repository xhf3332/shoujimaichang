import React, { Component } from 'react';
import './App.css'
import {NavLink as Link,Route} from 'react-router-dom'
import Home from './pages/Home';
import Priduct from './pages/Priduct';
import Cart from './pages/Cart';
import User from './pages/User';
import Login from './pages/Login';

import Footer from './components/footer/footer'
import PrivateRoute from './components/PrivateRoute'
import Xiangqing from './pages/Xiangqing';
import Reg from './pages/Reg';
import Dingdan from './components/user-zu/dingdan';
function App() {
  return (
    <div>
   
       <div>
        <Route path="/"  exact component={Home} />
        <Route path="/priduct" component={Priduct} /> 
        <PrivateRoute path="/cart">
          <Cart/>
          </PrivateRoute>
        <PrivateRoute path="/user">
          <User/>
          </PrivateRoute>
        <Route path="/login" component={Login} /> 
        <Route path="/xiangqing" component={Xiangqing}/>  
        <Route path="/reg" component={Reg} />
        <Route path="/dingdan" component={Dingdan} />

        

      </div> 
         <Footer/>
    </div>
  );
}

export default App;
