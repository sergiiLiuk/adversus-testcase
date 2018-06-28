import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Edit from '../components/Edit';
import Menu from '../components/Menu';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class Root extends Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <div className="row">
                <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1" >
                <Menu/> 
                </div>
                <div className="col-sm-9 col-md-9 col-lg-8 col-xl-5">
                <Router>              
                    <Route path="/" exact component={Edit} />                         
                </Router>
                </div>
                </div>       
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
