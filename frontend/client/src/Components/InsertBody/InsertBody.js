import axios from 'axios';
import React, { useState } from 'react';
import TableData from '../Body/TableData';
import './InsertBody.css';

function InsertBody() {
    const[query, setQuery] = useState();
    const[tableData, setTableData] = useState();
    var keys = (Object.keys(tableData ? tableData[0] : []));

    async function getQuery(e){
        e.preventDefault();
        console.log(query);
        var resQuery = await axios.post(`http://localhost:5000/inputquery`, {query});
        await resQuery.data
        setTableData(await resQuery.data);
    }

  return(
      <div className='form_input'>
          <h1>Enter the query</h1>
          <form onSubmit={getQuery}>
              <input className='input_field' type="text" placeholder='Query' onChange={(event) => setQuery(event.target.value)}/>
              <button type='submit' className='BTN'>Submit</button>
          </form>
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

export default InsertBody;
