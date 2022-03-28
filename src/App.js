// import logo from './logo.svg';
import './App.css';
import restaurant from "./restaurant.jpg"

import React, {useState} from "react"

function App() {
  const what = useState("Happy")//use Stage created a array, here it's the 'what'
  console.log(what)

  const [emotion, setEmotion] = useState("happy")//here 'emotion' means the first element of this array, now is 'happy'
  //this means, the default value is 'happy'
  return (
    <>
      <h1>Current emotion is {emotion}</h1>

      <button onClick = { () => setEmotion("happy") }>
        Happy
      </button>

      <button onClick = { () => setEmotion("frustrated") }>
        Frustrated
      </button>

      <button onClick = { () => setEmotion("ethusiastic") }>
        Ethuse
      </button>
    </>
  )
}

export default App;
