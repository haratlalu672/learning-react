import logo from './logo.svg';
import HelloWorld from "./Components/HelloWorld";
import CounterExample from "./Components/CounterExample";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routing from "./Components/Routing";

function App() {
  return (
    <div className="relative pb-5 min-h-screen">
      <Router>
        <Header />
        <div className="p-3">
          <Routing />
          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch> */}
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
