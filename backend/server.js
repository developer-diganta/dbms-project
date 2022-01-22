require('dotenv').config();
const express = require("express");
var mysql = require('mysql');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : 'student_portal'
});
connection.connect();

//add get route
app.get("/", (req, res) => {
    query = "SHOW TABLES";
    connection.query(query, (err, rows, fields) => { 
        if (err) throw err;
        var results = [];
        for (var i = 0; i < rows.length; i++) { 
            results.push(rows[i].Tables_in_student_portal);
        }
        console.log(results);
        res.json("Tables: " + results);
    });
});

app.get("/createtablestudent", (req,res) => { 
    query = `create table student(
name varchar(10) not null,
regno varchar(6) not null primary key,
rollno int(6) not null,
contact bigint(10),
address varchar(20) not null,
email varchar(25) not null
);`;
     connection.query(query, (err, rows, fields) => { 
        if(err) throw err;
        console.log(rows);
    });
})

app.get("/createtablestudentdept", (req, res) => { 
    query = `Create table student_dept(
regno varchar(6) not null,
dept_id int(3) not null
);`;
    connection.query(query, (err, rows, fields) => {
        if (err) throw err;
        res.json("Query: " + query);
     });
})

app.get("/createtableadministrator", (req, res) => { 
    query=`create table fee_receipt
( regno varchar(6) not null,
  receiptno varchar(6) not null
);`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err;
        res.json("Query: " + query);
    });
})

app.get("/createtablefeereceipt", (req, res) => { 
    query=`create table fee_receipt
( regno varchar(6) not null,
  receiptno varchar(6) not null
);`
    connection.query(query, (err, rows, fields) => {
        if (err) throw err;
        res.json("Query: " + query);
    });
})
//Listening on port 5000
app.listen(process.env.PORT || 5000, () => {
    console.log("Running on port 5000");
});