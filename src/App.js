import { Route } from "react-router-dom";
import Container from "./01-Todo list/components/Container";
import Login from "./02-Login/components/Login";
import Signup from "./02-Login/components/Signup"
import Crud from "./03-Crud/components/Crud"
import Navbar from "./04-Consumo de Api/components/Navbar";
import Quizz from "./05-Quizz-React/componenets/Quizz"
import Modal from "./06-Modal/components/Modal"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/search" component={Navbar} />
      <Route exact path="/Todo" component={Container} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/crud" component={Crud} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/quizz" component={Quizz} />
      <Route exact path="/modal" component={Modal} />



      

    </div>
  );
}

export default App;
