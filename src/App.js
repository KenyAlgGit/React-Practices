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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    //if login fail then skip this block
    if(!login) return;
    //otherwise trun loading into true
    setLoading(true)
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError)
  }, [login])

  if(loading) return <h1>Loading</h1>
  if(error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }
  if(!data) {return null}
  else{
    return (
      <div>
        <h1>Name: {data.name}</h1>
        <h2>Git: {data.login}</h2>
        <p>Location: {data.location}</p>
        <img alt={data.login} src={data.avatar_url}></img>
      </div>
    )
  }
}

export default App;
