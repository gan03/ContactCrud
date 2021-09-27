import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Alluser from "./Components/Alluser";
import Adduser from "./Components/Adduser";
import Edituser from "./Components/Edituser";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/all" component={Alluser} />
        <Route path="/add" component={Adduser} />
        <Route exact path="/edit/:id" component={Edituser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
