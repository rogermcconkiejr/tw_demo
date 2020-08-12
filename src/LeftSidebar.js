import React from 'react';
import './leftSidebar.css';
import { Route, Link } from "react-router-dom";
import Table1 from "./tables/Table1";
import Table2 from './tables/Table2';
import Table3 from './tables/Table3';
import Table4 from './tables/Table4';
import orgIcon from './Assets/orgIcon.png';
import peepIcon from './Assets/peepIcon.png';

function LeftSidebar() {
    return (
        <div className ='allBack'>
          <div className="leftBar">
            <h2>Settings</h2>
            <div className='fakeLinks'>
                <div>
                <img className='img3' src={orgIcon} />
                Organization
                </div>
                <div>
            <img className='img3' src={peepIcon} />
                SSO Integrations
                </div>
                <div >
            <img className='img3' src={orgIcon} />
                Routing
                </div>
            </div>
            <br/><br/>
            <div className="linkDiv">
                <Link to="/table1" style={{ textDecoration: 'none'}}>Effort Per Product</Link><br/>
                <Link to="/table2" style={{ textDecoration: 'none' }}>Capacity Per Level</Link><br/>
                <Link to="/table3" style={{ textDecoration: 'none' }}>Case Reassignment</Link><br/>
                <Link to="/table4" style={{ textDecoration: 'none' }}>General</Link>
            </div>

          </div>
          <div className= "linkedWindow">
              <Route path ="/table1" component = {Table1} />
              <Route path ="/table2" component = {Table2} />
              <Route path ="/table3" component = {Table3} />
              <Route path ="/table4" component = {Table4} />

          </div>
        </div>
    )
}

export default LeftSidebar;
