const mysql2 = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const pool = mysql2.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
});
pool.query('SELECT * FROM user', (err, res) => {
    if (err) {
        return console.error(err.message);
    }
    console.log(res);
});
module.exports = pool;