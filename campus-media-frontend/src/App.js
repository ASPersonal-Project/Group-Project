import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Navbar from './component/layout/Navbar';
import Home from './component/layout/Home';
import RegisterForm from './component/auth/RegisterForm';
import Profile from './component/profile/Profile';
import Photo from './component/profile/Photo';
import About from './component/profile/About';



const App = () =>{
  return (
    <div>
      <CssBaseline/>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/register' component={RegisterForm}/>
          <Route exact path='/profile' component={Profile}/>
          
          <Route exact path='/photo' component={Photo}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
