import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const checklist=["boots", "tent", "headlamp"]
// console.log(checklist[0])

//choose which one to be displayed
const [item1,,item2]=["boots", "tent", "headlamp"]
console.log(item2, item1)

//chapter 2.1 insert an element
ReactDOM.render(
  //using fragment could reduce adding tags into the page
  //this could make the page more flexible
  <React.Fragment>
  {/* this is a switch */}
    <App authorized={false}/>
  </React.Fragment>,
  //below is the location id you want it to add into
  document.getElementById('root') 
);