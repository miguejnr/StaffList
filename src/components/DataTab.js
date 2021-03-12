import React from 'react'
import './DataTab.css';

function DataTab({filter = "", rows}) {

    return (
      <div className="table__container">
        <div className="table">
          <table style={{width:"100%"}}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Cases</th>
                <th>Region</th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>
              {rows.filter(e => e.name.includes(filter) || e.cases.includes(filter) || e.region.includes(filter) || e.access.includes(filter)).map((row) => (
                <tr key={row.name} style={row.cases === "Archived" ? {color:'gray'} : null}>
                  <td>{row.name}</td>
                  <td>{row.cases}</td>
                  <td>{row.region}</td>
                  <td>{row.access}</td>
                </tr>        
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default DataTab
