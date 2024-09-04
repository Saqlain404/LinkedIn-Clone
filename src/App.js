import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import { getUserAuth } from './actions';
import {connect} from "react-redux"

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, [])
  return (
    <div className="App">
      {/* <h1>Lets build linked clone🚀</h1> */}
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/home' element={[<Header/>,<Home/>]}/>
      </Routes>
        </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{

  };
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
