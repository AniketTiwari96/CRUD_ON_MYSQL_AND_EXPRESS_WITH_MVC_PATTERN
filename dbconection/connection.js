
// how to make connection of database from mysql

const mysql=require('mysql');
// connection of database
let con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Aniket@123',
    database:'crudData2'
});


con.connect((err)=>{
    if (err) throw err;
    console.log('database connected ;');
    var sql = "CREATE TABLE student (id int AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), age int,gmail varchar(55),password varchar(255))";
    con.query(sql, function (err, result) {
        if(err){
            console.log('table already exist ');
        }else{
            console.log("Table created");
        }
    })
})

module.exports=con