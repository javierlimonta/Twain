import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {WebScan} from "./WebScan";
import {WebTwain} from "./WebTwain";

class App extends Component {
    render() {
        return (
            <div className="App">
               <WebTwain/>
                <hr/>
                <WebScan/>
            </div>
        );
    }
}

export default App;
