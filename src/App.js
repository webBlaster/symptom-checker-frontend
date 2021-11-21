import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
