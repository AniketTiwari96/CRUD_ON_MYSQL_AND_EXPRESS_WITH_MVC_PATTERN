// yaha import connection of database
const connection=require('../dbconection/connection');
const createuser=(req,res)=>{
    const data={
        name:req.body.name,
        age:req.body.age,
        gmail:req.body.gmail,
        password:req.body.password
        
    }
    const query = 'insert into student set ?';
    connection.query(query,data,(err,data)=>{
        if(err){
            console.log(err);
            res.send({messege:err});
        }
        console.log(data);
        res.json({data:'data inserte successfully......'})
    })
}

const readuser=(req,res)=>{
    try {
        const sql=`select*from student where id =${req.params.id}`;
        connection.query(sql,(err,data)=>{
            if(data!=0){
                console.log(data);
                res.send(data)
            }else{
                res.send('user not found ')
            }
        })
    } catch (error) {
        
    }
}

const readAllData=(req,res)=>{
    let sql='select*from student';
    connection.query(sql,(err,data)=>{
        if (err){
            console.log(err);
            res.send({messege:err})
        }
        console.log(data);
        res.send(['This is your All Data',data])
    })
}

const updateuser=(req,res)=>{
    try {
        const data={
            name:req.body.name,
            age:req.body.age,
            gmail:req.body.gmail,
            password:req.body.password
            
        }
        let sql=`update student set name='${req.body.name}' , age="${req.body.age}", gmail='${req.body.gmail}', password="${req.body.password}"  where id="${req.params.id}"`;
        connection.query(sql,data,(err,data)=>{
            if (data==undefined){
                console.log('user data not found');
                res.json({messege:err})
            }else{
                console.log(data);
                res.json({data:'updated successfully '})
            }
        })
    } catch (error) {
        console.log(error.messege);
    }
}

const deleteData=(req,res)=>{
    try {
        let sql=`delete from student where id=${req.params.id}`;
        connection.query(sql,(err,data)=>{
            console.log(data);
            if(data!=0){
                console.log('data delete successefully ');
                res.send('data deleted successfully......')
            }else{
                console.log('user not found ');
                res.send('user data not found ')
            }
        })
    } catch (error) {
        console.log('error.message');
        res.send({err:error.message})
    }
}
module.exports={createuser,readuser,readAllData,updateuser,deleteData}