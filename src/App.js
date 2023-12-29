import './App.css';
import React, { Component } from 'react';
import NavBar from './component/NavBar';
import { News } from './component/News';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes
} from "react-router-dom";
// import { NewsItems } from './component/NewsItems';
//  passward
// %bqT@rX*D??+u3H
// api key :-73d1cec1a8bf42dd9165e606c1db2f29
 export default class App extends Component {
   pagesize=9
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/sports" element={<News country='in' key="sports" category='sports' pageSize={this.pagesize} />}></Route>
            <Route path="/business" element={<News country='in' key="business" category='business' pageSize={this.pagesize} />}></Route>
            <Route path="/entertainment" element={<News country='in' key="entertainment" category='entertainment' pageSize={this.pagesize} />}></Route>
            <Route path="/general" element={<News country='in' key="general" category='general' pageSize={this.pagesize} />}></Route>
            <Route path="/health" element={<News country='in' key="health" category='health' pageSize={this.pagesize} />}></Route>
            <Route path="/science" element={<News country='in' key="science" category='science' pageSize={this.pagesize} />}></Route>
            <Route path="/technology" element={<News country='in' key="technology" category='technology' pageSize={this.pagesize} />}></Route>
          </Routes>

        </Router>
      </div>
    )
  }


}
