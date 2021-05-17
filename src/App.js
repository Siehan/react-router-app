import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
