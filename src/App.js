
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {HashRouter,Route,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  state = {
    progress:0
  }


  setProgress = (progress) =>{
    this.setState({progress:progress})
  }


  render() {
    return (

        <HashRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <div className="container my-3">
              <Routes>

              <Route exact path="/" element={<News setProgress={this.setProgress} key="general"  pageSize={5} category="general"/>}/>
              <Route exact path="/MonkNews" element={<News setProgress={this.setProgress} key="general"  pageSize={5} category="general"/>}/>
                <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={5} category="business"/>}/>
                <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={5} category="entertainment"/>}/>
                <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={5} category="general"/>}/>
                <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={5} category="health"/>}/>
                <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={5} category="science"/>}/>
                <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={5} category="sports"/>}/>
                <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={5} category="technology"/>}/>
                
              </Routes>
            </div>
        </HashRouter>
    )
  }
}
