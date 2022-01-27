// require('dotenv').config();
const express = require("express");
var mysql = require('mysql');
const cors = require("cors");
const { query } = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dana@1234',
  database : 'student_portal'
});
connection.connect();

//add get route
app.get("/", (req, res) => {
    var query = "SHOW TABLES";
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

app.get("/showdata", (req, res) => {
    var query=`select * from student;`
    connection.query(query, (err, rows, fields) => {
        if(err) throw err;
        res.json(rows);
    });
})



app.get("subject/:sub/:percent", (req, res) => {
    const regno = req.params.regno;
    const sub = req.params.sub;
    const percent = req.params.percent;
    const query = `select * from student where regno in (select Registration_number from query where Subject_name='${sub}' and score>=${percent});`
    connection.query(query, (err, rows, fields) => {
        if(err) throw err;
        console.log(rows);
        res.json(rows);
    })
})

// app.get("/totalmarks", (req, res) => {
//     const query = `select Registration_number, sum(score) as total_marks from query group by Registration_number;`
//     connection.query(query, (err, rows, fields) => {
//         if(err) throw err;
//         console.log(rows);
//         // res.json(rows);
//     })
// })

app.get("/totalmarks", (req, res) => {
    const query = `select name, regno from student where regno in (select regno from fee_details,fee_receipt where fee_details.recieptno=fee_receipt.receiptno and fee_details.concession is not null);`
    connection.query(query, (err, rows, fields) => {
        if(err) throw err;
        console.log(rows);
        res.json(rows);
    })
})

app.get("/a", (req, res) => { 
    var query = `select name, regno from student where regno in (select regno from fee_details,fee_receipt where fee_details.recieptno=fee_receipt.receiptno and fee_details.concession is not null);`;
    connection.query(query, (err, rows, fields) => {
        if (err) throw err;
        res.json("Query: "+ query);
     });
})

app.get("/xyz/:query", (req, res) => {
    const queryName = req.params.query;
    console.log(queryName);
    var query=`${queryName}`;
    connection.query(query, (err, rows, fields) => {
        if(err) throw err;
        
        console.log(rows);
        res.json(rows);
    });
})

app.post("/sort", (req, res) => {
    const order = req.body.order;
    const order_by = req.body.order_by;
    const last_query = req.body.last_query;
    var query=`${last_query}` + " ORDER BY " + order_by + " "+ order;
    connection.query(query, (err, rows, fields) => {
        if(err) throw err;
        console.log(rows);
        res.json(rows);
    });
    console.log(order, order_by, last_query);
})



//Listening on port 5000
app.listen(process.env.PORT || 5000, () => {
    console.log("Running on port 5000");
});