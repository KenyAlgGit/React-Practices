// import logo from './logo.svg';
import './App.css';

//a component is a function
function Header(props){
  console.log(props)
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1> 
      {/* using parameters here */}
    </header>
  )
}
//notice the {} having parameters
function Main(props){
  return(
    <section>
      <p>We serve the most {props.adjective} food around</p>
    </section>
  )
}

function Footer(props){
  return(
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}


function App() {
  return (
    <div className="App">
      <Header name="Dan"></Header> 
      {/* render the sub-component into the parent one */}
      <Main adjective="amazing"></Main>
      <Footer year={new Date().getFullYear()}></Footer>
    </div>
  );
}

export default App;
