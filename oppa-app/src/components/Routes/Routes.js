import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './../../history';
import Mobile from './../Mobile/Mobile';
import Utility from './../Utility/Utility';
import Cherity from './../Cherity/Cherity';
import Finances from './../Finances/Finances';

import Home from './../Home/Home';



export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Mobile" component={Mobile} />
                    <Route path="/Utility" component={Utility} />
                    <Route path="/Cherity" component={Cherity} />
                    <Route path="/Finances" component={Finances} />
                </Switch>
            </Router>
        )
    }
}