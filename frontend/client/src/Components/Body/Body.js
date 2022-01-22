import React from 'react';
import axios from 'axios';

async function Body() {
const a = await axios.get('http://localhost:5000/select%20*%20from%20administrator;');
await a.data.json;
console.log(a.data);
  return <div>
      <h1>ABCD</h1>
  </div>;
}

export default Body;

