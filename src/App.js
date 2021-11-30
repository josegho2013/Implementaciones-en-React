import { Route } from "react-router-dom";
import Container from "./01-Todo list/components/Container";
import Login from "./02-Login/components/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/Todo" component={Container} />
      <Route exact path="/Login" component={Login} />
    </div>
  );
}

export default App;
