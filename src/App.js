import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Dashboard from "./pages/dashboard";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import About from "./pages/about";

function App() {
  let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/login" exact component={Signin} />
        <Route path="/register" exact component={Signup} />
        <Route exact path="/dashboard">
          {isAuthenticated ? <Dashboard /> : <Signin />}
        </Route>
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
