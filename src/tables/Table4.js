import React from 'react';
import './table4.css';

function Table4() {
    return (
        <div>
          <div className = 'titleDiv'>
            <p class='headTitle'>Routing Settings > General</p>
            </div>
<div class='wrapper'>
<table className='table4'>
  <tr>
    <td class='firstCol4' style={{ backgroundColor:"ghostwhite"}}>Force Partial Skills Match</td>
    <td class = 'secondCol'><select><option>Yes</option><option>No</option></select></td>
  </tr>
  <tr>
    <td class='firstCol4' style={{ backgroundColor:"ghostwhite"}}>Active Backlog Zendesk Field</td>
    <td class = 'secondCol'>40724389273521</td>
  </tr>
  <tr>
    <td class='firstCol4' style={{ backgroundColor:"ghostwhite"}}>Product Field</td>
    <td class = 'secondCol'>324895435</td>
  </tr>
</table>
</div>
        </div>
    )
}

export default Table4;
