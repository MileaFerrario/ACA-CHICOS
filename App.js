//import logo from './logo.svg';
import React from "react"
import {Header} from "./components/Header";
import {ShowsList} from "./components/Shows/index";
import 'boxicons';
import './App.css';


function App () {
  return(
    <div className='App'>
      <Header />
      <ShowsList />

    </div>
  )
}

export default App; 
