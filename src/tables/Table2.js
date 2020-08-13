import React from 'react';
import './table2.css'
function Table2() {
    return (
        <div>
            <div className = 'titleDiv'>
            <p class='headTitle'>Routing Settings > Skills Capacity</p>
            </div>
<div class='wrapper'>
<table className="table2">
  <tr>
    <th>SKILL LEVEL</th>
    <th>MAXIMUM #P1 PER DAY</th>
    <th>DAILY CAPACITY (ACTIVE BACKLOG)</th>
    <th>DAILY CAPACITY (PASSIVE BACKLOG)</th>
  </tr>
  <tr>
    <td class='firstCol2'>Level 1</td>
    <td class = 'secondCol'>0</td>
    <td class = 'secondCol'>3</td>
    <td class = 'secondCol'>8</td>
  </tr>
  <tr>
    <td class='firstCol2'>Level 2</td>
    <td class = 'secondCol'>0</td>
    <td class = 'secondCol'>5</td>
    <td class = 'secondCol'>10</td>
  </tr>
  <tr>
    <td class='firstCol2'>Level 3</td>
    <td class = 'secondCol'>1</td>
    <td class = 'secondCol'>8</td>
    <td class = 'secondCol'>16</td>
  </tr>
  <tr>
    <td class='firstCol2'>Level 4</td>
    <td class = 'secondCol'>1</td>
    <td class = 'secondCol'>9</td>
    <td class = 'secondCol'>18</td>
  </tr>
  <tr>
    <td class='firstCol2'>Level 5</td>
    <td class = 'secondCol'>2</td>
    <td class = 'secondCol'>10</td>
    <td class = 'secondCol'>20</td>
  </tr>
 
</table>
</div>
        </div>
    )
}

export default Table2;
