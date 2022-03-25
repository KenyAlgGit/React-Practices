import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//chapter 1.1
/*ReactDOM.render(
  //below is the element you want to add
  React.createElement("h1", {style: {color:"blue"}}, "Hello World, this is React!"), 
  //(tag name, property setting, text)
  
  //below is the location id you want it to add into
  document.getElementById('root') 
);*/


//chapter 1.2 create a list of items
// ReactDOM.render(
//   //below is the element you want to add
//   React.createElement(
//     "ul",
//     null, 
//     React.createElement("li",null,"Monday"),
//     React.createElement("li",null,"Tuesday"),
//     React.createElement("li",null,"Wednesday"),
//     React.createElement("li",null,"Thursday"),
//     React.createElement("li",null,"Friday"),
//     ), 
  
//   //below is the location id you want it to add into
//   document.getElementById('root') 
// );

//chapter 2.1 insert an element
ReactDOM.render(
  //below is the element you want to add
    <App />, //this is the element id
  
  //below is the location id you want it to add into
  document.getElementById('root') 
);