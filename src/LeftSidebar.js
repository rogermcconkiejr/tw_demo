import React from 'react';
import './leftSidebar.css';
import { Route, Link } from "react-router-dom";
import Table1 from "./tables/Table1";
import Table2 from './tables/Table2';
import Table3 from './tables/Table3';
import Table4 from './tables/Table4';
import orgIcon from './Assets/orgIcon.png';
import peepIcon from './Assets/peepIcon.png';
import newShot1 from './Assets/newShot1.png';
import newShot2 from './Assets/newShot2.png';
import newShot3 from './Assets/newShot3.png';
import newShot4 from './Assets/newShot4.png';


function LeftSidebar() {
    return (
        <div className ='allBack'>
          <div className="leftBar">
            <h2>Settings</h2>
            <div className='fakeLinks'>
                <div className='div5'>
                <img className='img3' src={newShot1} />
                <p className='moveUp'>Organization</p>
                </div>
                <div className = 'div5'>
            <img className='img3' src={newShot2} />
                <p className='moveUp'>SSO Integrations</p>
                </div>
                <div className= 'div5'>
                <img className='img3' src={newShot4} />
                <p className='moveUp'>Routing</p>
                </div>
            </div>
            <br/><br/>
            <div className="linkDiv">
            <div className= 'routingLink'>
                </div>
                <Link to="/table1" style={{ textDecoration: 'none', color:'BLACK'}}>Effort Per Product</Link><br/>
                <Link to="/table2" style={{ textDecoration: 'none', color:'BLACK'}}>Capacity Per Level</Link><br/>
                <Link to="/table3" style={{ textDecoration: 'none', color:'BLACK' }}>Case Reassignment</Link><br/>
                <Link to="/table4" style={{ textDecoration: 'none', color:'BLACK' }}>General</Link>
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
