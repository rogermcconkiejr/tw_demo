import React from 'react';
import './table3.css';

function Table3() {
    return (
        <div>
          <div className = 'titleDiv'>
            <p class='headTitle'>Routing Settings > Case Reassignment</p>
          </div>
<div class='wrapper'>
<table className='table3'>
  <tr>
    <th style={{ backgroundColor:"ghostwhite"}}>Priority</th>
    <th style={{ backgroundColor:"ghostwhite"}}>Behavior</th>
    <th style={{ backgroundColor:"ghostwhite"}}>Maximum Wait Time</th>
  </tr>
  <tr>
    <td class='firstCol2'>P3</td>
    <td class = 'secondCol2'>
      <select>
      <option>Re-route to First Available Agent, Last in Backlog</option>
      <option>Re-route to First Available Agent, Last in Backlog</option>
      <option>Route to Same Agent, Last in Backlog</option>
      <option>Route to Same Agent, First in Backlog</option>
      </select>
    </td>
    <td class = 'secondCol'>-</td>
  </tr>
  <tr>
    <td class='firstCol2'>P2</td>
    <td class = 'secondCol2'>
    <select>
      <option>Route to Same Agent, Last in Backlog</option>
      <option>Re-route to First Available Agent, Last in Backlog</option>
      <option>Re-route to First Available Agent, Last in Backlog</option>
      <option>Route to Same Agent, First in Backlog</option>
      </select>
    </td>
    <td class = 'secondCol'>36 h</td>
  </tr>
  <tr>
    <td class='firstCol2'>P1</td>
    <td class = 'secondCol2'>
    <select>
      <option>Route to Same Agent, First in Backlog</option>
      <option>Route to Same Agent, Last in Backlog</option>
      <option>Re-route to First Available Agent, Last in Backlog</option>
      <option>Re-route to First Available Agent, Last in Backlog</option>
      </select>
    </td>
    <td class = 'secondCol'>4 h</td>
  </tr>
</table>
</div>
        </div>
    )
}

export default Table3;
