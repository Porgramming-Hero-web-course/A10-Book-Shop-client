import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AddBook from './components/AddBook/AddBook';
import AllOrders from './components/AllOrders/AllOrders';
import BuyBook from './components/BuyBook/BuyBook';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyBooks from './components/MyBooks/MyBooks';
import MySingleBook from './components/MySingleBook/MySingleBook';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/buybook/:id">
            <BuyBook></BuyBook>
          </PrivateRoute>
          <PrivateRoute path="/mybooks">
            <MyBooks/>
          </PrivateRoute>
          <PrivateRoute path="/mysinglebook">
            <MySingleBook />
          </PrivateRoute>
          <PrivateRoute path="/allorders">
            <AllOrders />
          </PrivateRoute>
          <PrivateRoute path="/addbook">
            <AddBook />
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
