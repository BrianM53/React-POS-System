import React from 'react';

function ReportLabels({ activeReport }) {
  return (
    <div>
      <div className={activeReport === "Sales Report" ? 'active-label' : 'passive-label'}>
          <nav className='report-label'>
            <ul>
              <li><a className='label'>SR 1</a></li>
              <li><a className='label'>SR 2</a></li>
              <li><a className='label'>SR 3</a></li>
              <li><a className='label'>SR 4</a></li>
              <li><a className='label'>SR 5</a></li>
            </ul>
          </nav>
        </div>

        <div className={activeReport === "Excess Report" ? 'active-label' : 'passive-label'}>
          <nav className='report-label'>
            <ul>
              <li><a className='label'>ER 1</a></li>
              <li><a className='label'>ER 2</a></li>
              <li><a className='label'>ER 3</a></li>
              <li><a className='label'>ER 4</a></li>
              <li><a className='label'>ER 5</a></li>
            </ul>
          </nav>
        </div>

        <div className={activeReport === "Restock Report" ? 'active-label' : 'passive-label'}>
          <nav className='report-label'>
            <ul>
              <li><a className='label'>RR 1</a></li>
              <li><a className='label'>RR 2</a></li>
              <li><a className='label'>RR 3</a></li>
              <li><a className='label'>RR 4</a></li>
              <li><a className='label'>RR 5</a></li>
            </ul>
          </nav>
        </div>

        <div className={activeReport === "Sells Together" ? 'active-label' : 'passive-label'}>
          <nav className='report-label'>
            <ul>
              <li><a className='label'>ST 1</a></li>
              <li><a className='label'>ST 2</a></li>
              <li><a className='label'>ST 3</a></li>
              <li><a className='label'>ST 4</a></li>
              <li><a className='label'>ST 5</a></li>
            </ul>
          </nav>
        </div>

        <div className={activeReport === "Usage Chart" ? 'active-label' : 'passive-label'}>
          <nav className='report-label'>
            <ul>
              <li><a className='label'>UC 1</a></li>
              <li><a className='label'>UC 2</a></li>
              <li><a className='label'>UC 3</a></li>
              <li><a className='label'>UC 4</a></li>
              <li><a className='label'>UC 5</a></li>
            </ul>
          </nav>
        </div>

        <div className={activeReport === "Add Employee" ? 'active-label' : 'passive-label'}>
          <nav className='report-label'>
            <ul>
              <li><a className='label'></a></li>
              <li><a className='label'></a></li>
              <li><a className='label'></a></li>
              <li><a className='label'></a></li>
              <li><a className='label'></a></li>
            </ul>
          </nav>
        </div>
    </div>
  );
}

export default ReportLabels;
