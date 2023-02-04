
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {HashRouter,Route,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {

  const [progress,setProgress] = useState(0)





    return (

        <HashRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <div className="container my-3">
              <Routes>

              <Route exact path="/" element={<News setProgress={setProgress} key="general"  pageSize={5} category="general"/>}/>
              <Route exact path="/MonkNews" element={<News setProgress={setProgress} key="general"  pageSize={5} category="general"/>}/>
                <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={5} category="business"/>}/>
                <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={5} category="entertainment"/>}/>
                <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={5} category="general"/>}/>
                <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={5} category="health"/>}/>
                <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={5} category="science"/>}/>
                <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={5} category="sports"/>}/>
                <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={5} category="technology"/>}/>
                
              </Routes>
            </div>
        </HashRouter>
    )
  
}

export default App;