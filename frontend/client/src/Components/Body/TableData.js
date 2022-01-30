import axios from 'axios';
import React, { useState } from 'react';



function TableData({tableData, tableName}) {
    const[insert, setInsert] = useState(false);
    const[num, setNum] = useState();
    const[num_1, setNum_1] = useState();
    var keys = (Object.keys(tableData ? tableData[0] : []));
    async function deleteitem(data){
        console.log(data);
        var query = `delete from ${tableName} where idx=${data};`;
        const response_A = await axios.post(`http://localhost:5000/delete`, {query});
        console.log(query);
    }
    function form_fn(index, ix){
        // console.log(nm, mm);
        setInsert(true);
        setNum(index);
        setNum_1(ix);
    }
    // console.log(tableData, keys);
    function updateVal(){
        console.log("kdgdugksjkesgkjegks");
        setInsert(true);
    }
    async function sendUpdateData(event, x, tableName, idx){
        event.preventDefault();
        //     tablename = req.body.tablename;
        // var idx = req.body.idx;
        // var cell = req.body.cell;
        // var value
        var tablename = tableName;
        var id = idx;
        var cell = x;
        var val = event.target.data.value;
        
        await axios.post(`http://localhost:5000/updatequery`, {tablename, id, cell, val});
    }

    async function insertData(){
        console.log("ABCD");
    }

    return(
                tableData ? tableData.map((item, ix) => 
                {
                    return(
                        <tr>{
                            keys.map((x, index) => {
                                return(
                                    index === 0 ?
                                    console.log("Kdhkdh"):
                                    <td style={{width: "100vw",border: "1px solid #FFB067", backgroundColor: "#FFED86",textAlign: "center", margin: "0px auto", padding: "10px"}}>
                                    {/* {} */}
                                    <div className='data_form' style={{display: insert ? "block" : "none"}}>
                                        <div style={{display: index === num && ix === num_1 ? "block" : "none"}}>
                                            <form onSubmit={(event) => sendUpdateData(event,x, tableName, item['idx'])}>
                                                <div className='p_up'>
                                                    <input className='update_form' name="data" type="text" id="" />
                                                    <button onClick={() => setInsert(false)}>Cancel</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
    
                                    {/* <button>ABCD</button> */}
                                    {<div onClick={() => form_fn(index, ix)}>{item[x]}</div>}
                                    {
                                        index === keys.length-1 ? <i class="fas fa-trash-alt" style={{cursor: "pointer", color: "#B44603", margin: "0px 10px"}} onClick={()=> deleteitem(item['idx'])}></i> : console.log("ABCD")
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
