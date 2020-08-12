import React from 'react';
import './table3.css';

function Table3() {
    return (
        <div>
            <p class='headTitle'>Routing Settings > Case Reassignment</p>
<hr/>
<div class='wrapper'>
<table className='table3'>
  <tr>
    <th>PRIORITY</th>
    <th>BEHAVIOR</th>
    <th>MAXIMUM WAIT TIME</th>
  </tr>
  <tr>
    <td class='firstCol2'>P3</td>
    <td class = 'secondCol2'>Re-route to First Available Agent, Last in Backlog <i class="fa fa-angle-down"></i></td>
    <td class = 'secondCol'>-</td>
  </tr>
  <tr>
    <td class='firstCol2'>P2</td>
    <td class = 'secondCol2'>Route to Same Agent, Last in Backlog <i class="fa fa-angle-down"></i></td>
    <td class = 'secondCol'>36 h</td>
  </tr>
  <tr>
    <td class='firstCol2'>P1</td>
    <td class = 'secondCol2'>Route to Same Agent, First in Backlog <i class="fa fa-angle-down"></i></td>
    <td class = 'secondCol'>4 h</td>
  </tr>
  <tr>
      <td colspan="3" class='lastCol'>ADD PRIORITY +</td>
  </tr>
</table>
</div>
        </div>
    )
}

export default Table3;
