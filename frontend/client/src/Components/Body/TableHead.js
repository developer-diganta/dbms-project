import React from 'react';

function TableHead({tableData}) {
    var keys = (Object.keys(tableData ? tableData[0] : []));
    return <tr>
    {keys.map((y)=><th style={{width: "100vw", border: "1px solid #B8390E", textTransform: "uppercase", backgroundColor: "#FFB067",textAlign: "center", margin: "0px auto", padding: "10px"}}>{y}</th>)}
    </tr>
}

export default TableHead;
