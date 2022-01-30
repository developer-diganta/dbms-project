import axios from 'axios';
import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import TableData from '../Body/TableData';
import './InBuilt.css';

function InBuilt() {
  const[tableData, setTableData] = useState();
  var keys = (Object.keys(tableData ? tableData[0] : []));
  async function getData(query){
    console.log("ABCD", query);
    const response_A = await axios.get(`http://localhost:5000/${query}`);
    // console.log(response_A);
    await response_A.data.json;
    
    setTableData(await response_A.data);
    console.log(response_A);
  }

  return(
    <div>
      <div className='drop'>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item onClick={() => getData('details')}>Students with concession</Dropdown.Item>
          <Dropdown.Item onClick={() => getData('departments/Information technology')}>It Dept</Dropdown.Item>
          <Dropdown.Item onClick={() => getData('departments/Computer science')}>Cse Dept</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="table_1">
          <tr>
              {keys.map((y)=><th style={{width: "100vw", border: "1px solid #B8390E", textTransform: "uppercase", backgroundColor: "#FFB067",textAlign: "center", margin: "0px auto", padding: "10px"}}>
              {y}
              </th>)}
          </tr>
              {
              tableData ?
              <TableData tableData={tableData} />
              :
              console.log("NULL")
              }
      </div>
    </div>
  )
}

export default InBuilt;
