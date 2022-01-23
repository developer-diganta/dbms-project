import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import TableData from './TableData';
import TableHead from './TableHead';


function Body() {
  const[tableData, setTableData] = useState();
  async function data(){
    const a = await axios.get('http://localhost:5000/showdata');
    await a.data.json;
    // console.log(a.data);
    setTableData(await a.data);
    // console.log(tableData);
  }

//   function tableHead(){
//     tableData[0].map((x)=>{
    
//  })
//  }



 useEffect(() => {
   data();
 }, [])

  return (
    <div style={{paddingTop: "80px"}}>
      <table>
        {/* <tbody> */}
        {/* <thead> */}
          <TableHead tableData={tableData} />
        {/* </thead> */}
          <TableData tableData={tableData} />
        {/* </tbody> */}
      </table>
    </div>
  );
}

export default Body;
