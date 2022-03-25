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
      <ul style = {  {textAlign:"left"}  }>
        {props.dishes.map ((dish) => <li>{dish}</li> )}
      </ul>
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

//create a list of dishes, this is a array obj
const dishes=[
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with vegetables",
  "Sushi"
]

// this is testing whether this list working fine before inserting into use
dishes.map((dish)=>console.log(dish))

function App() {
  return (
    <div className="App">
      <Header name="Dan"></Header> 
      {/* render the sub-component into the parent one */}
      <Main adjective="amazing" dishes={dishes}></Main>
      <Footer year={new Date().getFullYear()}></Footer>
    </div>
  );
}

export default App;
