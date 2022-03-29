// import logo from './logo.svg';
import './App.css';
import restaurant from "./restaurant.jpg"

import React, {useState, useEffect, useReducer} from "react"

//https://api.github.com/users/KenyAlgGit

function App({login}) {

  // const [checked, setChecked] = useState(false)
  // //default value of 'checked' is false

  // function toggle(){
  //   setChecked( (checked) => !checked )
  //   //change "checked" value to true
  // }

  const [data, setData] = useState(null)
  //default value is null

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData)
  }, [])

  if(data){
    return <div>{JSON.stringify(data)}</div>
  }
  else{
    return <div>No user Available</div>
  }

  return (
    <div></div>
  )
}

export default App;
