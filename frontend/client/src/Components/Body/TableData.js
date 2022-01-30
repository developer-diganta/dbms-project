import axios from 'axios';
import React from 'react';

function TableData({tableData, tableName}) {
    var keys = (Object.keys(tableData ? tableData[0] : []));
    async function deleteitem(data){
        console.log(data);
        var query = `delete from ${tableName} where idx=${data};`;
        const response_A = await axios.post(`http://localhost:5000/delete`, {query});
        console.log(query);
    }
    console.log(tableData, keys);
    return(
                tableData ? tableData.map((item) => {
                    return(
                        <tr>{
                            keys.map((x, index) => {
                                return(
                                    <td style={{width: "100vw",border: "1px solid #FFB067", backgroundColor: "#FFED86",textAlign: "center", margin: "0px auto", padding: "10px"}}>{item[x]}
                                    {
                                        index === keys.length-1 ? <i class="fas fa-trash-alt" style={{cursor: "pointer"}} onClick={()=> deleteitem(item['idx'])}></i> : console.log("ABCD")
                                        // console.log(item['idx'], x)
                                    }
                                    </td>
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
