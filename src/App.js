// import logo from './logo.svg';
import './App.css';
import restaurant from "./restaurant.jpg"

import React, {useState, useEffect, useReducer} from "react"

function App() {

  // const [checked, setChecked] = useState(false)
  // //default value of 'checked' is false

  // function toggle(){
  //   setChecked( (checked) => !checked )
  //   //change "checked" value to true
  // }

  const [checked, toggle] = useReducer( (checked) => !checked, false )
  //default value of 'checked' is false

  return (
    <>
      <input type='checkbox' 
      value={checked}
      onChange={ toggle }
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  )
}

export default App;
