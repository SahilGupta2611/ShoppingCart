import "./App.css";
import Header from "./containers/Header";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

// Use Hash Router for github Pages
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
