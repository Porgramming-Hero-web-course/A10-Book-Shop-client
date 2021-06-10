import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import MyBooks from './components/MyBooks/MyBooks';
import BuyBook from './components/BuyBook/BuyBook';
import MySingleBook from './components/MySingleBook/MySingleBook';
import Admin from './components/Admin/Admin';
import AllOrders from './components/AllOrders/AllOrders';
import AddBook from './components/AddBook/AddBook';


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
          <Route path="/buybook/:id">
            <BuyBook></BuyBook>
          </Route>
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
