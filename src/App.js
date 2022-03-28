// import logo from './logo.svg';
import './App.css';
import restaurant from "./restaurant.jpg"

function SecretComponent(){
  return <h1>Super secret information for authorized users only</h1>;
}

function RegularComponent(){
  return <h1>Everyone could see this component.</h1>;
}

function App(props) {
  // use a shorter case expression
  return (
    <>{props.authorized ? <SecretComponent></SecretComponent> : <RegularComponent></RegularComponent>}</>
  )
  
    // if(props.authorized){
    //   return <SecretComponent></SecretComponent>
    // }
    // else{
    //   return <RegularComponent></RegularComponent>
    // }
}

export default App;
