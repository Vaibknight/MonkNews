import React, { Component } from 'react'
import {Link} from "react-router-dom";

const Navbar= ()=>{



    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MonkNews</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
      </ul>
      {/* <form className="d-flex" role="search">
        <div>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event)=>this.search(event.target.value)}/>
        <div>
          {
            this.state.searchData?
            <div>
              {
                this.state.searchData.map((item)=>
                <div>{item.title}</div>
                )
              }
            </div>
            :""

          }
          {
            this.state.noData?<h3>No Data Found</h3>:null
          }
        </div>
        </div>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
      </div>
    ) 
}

export default Navbar
