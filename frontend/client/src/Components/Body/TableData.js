import React from 'react';

function TableData({tableData}) {
    var keys = (Object.keys(tableData ? tableData[0] : []));

    console.log(tableData, keys);
    return(
                tableData ? tableData.map((item) => {
                    return(
                        <tr>{
                            keys.map((x) => {
                                return(
                                    <td style={{width: "100vw",border: "1px solid #FFB067", backgroundColor: "#FFED86",textAlign: "center", margin: "0px auto", padding: "10px"}}>{item[x]}</td>
                                )
                            })
                        }
                        </tr>
                    )
                })
                :
                console.log("d")
    )
}

export default TableData;
