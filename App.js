import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserReg from './components/users/userReg';
import React from "react";
import WebFont from 'webfontloader';
import { useSelector } from 'react-redux';
import UserOptions from "../src/components/Layout/Headers/UserOptions"

function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanks"]
      }
    })
    
  },[])

  const {isAuthenticated,user}=useSelector(state=>state.user)
  return (
    <Router>
      <Routes>
      {isAuthenticated && <UserOptions user={user} />}
      <Route path="/" element={<UserReg />}/>
      </Routes>
    </Router>
      );
}

export default App;
