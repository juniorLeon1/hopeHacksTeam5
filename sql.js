const express = require('express');
const app = express();
const pool = require('./database.js');
// Parse the request body as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('../views/log',(req,res)=>{
  res.render('../views/log');
 });
 // DEFINE EVERYTHING
 app.post('../views/log',async (req,res)=>{
 const {email,password} = req.body;
 console.log(`New Sign up Form submission: ${email}`);
 try{
     const conn = await pool.getConnection();
     const[rows, fields]= await conn.execute(
     'INSERT INTO log(email) VALUES (?)',
     [email]
     );
     console.log(`Inserted ${row.affectedRows}row($)`);
     conn.release();
     res.send('Thanks for signing up');
 }catch (err){
     console.error(err);
     res.status(500).send('Internal Server Error')
 }
 });
 app.listen(4000,()=>{
  console.log('server starting on port 4000');
 });