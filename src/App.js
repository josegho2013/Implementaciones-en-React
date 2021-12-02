import { Route } from "react-router-dom";
import Container from "./01-Todo list/components/Container";
import Login from "./02-Login/components/Login";
// import Crud from "./03-Crud/component/"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/Todo" component={Container} />
      <Route exact path="/Login" component={Login} />
      {/* <Route exact path="/Crud" component={Crud} /> */}

    </div>
  );
}

export default App;
