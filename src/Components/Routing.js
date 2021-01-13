import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Views/Home";
import About from "../Views/About";
import Product from '../Views/Product';

function Routing() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/products/:id">
                    <Product />
                </Route>
            </Switch>
        </div>
    )
}

export default Routing