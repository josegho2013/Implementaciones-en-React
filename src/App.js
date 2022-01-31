import { Route } from "react-router-dom";
import Container from "./01-Todo list/components/Container";
import Login from "./02-Login/components/Login";
import Signup from "./02-Login/components/Signup"
// import Crud from "./03-Crud/component/"
// import Search from "./04-Consumo de Api/components/Search"
import Navbar from "./04-Consumo de Api/components/Navbar";
import Quizz from "./05-Quizz-React/componenets/Quizz"


import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/search" component={Navbar} />
      <Route exact path="/Todo" component={Container} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/quizz" component={Quizz} />


      

    </div>
  );
}

export default App;
