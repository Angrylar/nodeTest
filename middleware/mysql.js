const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root123',
  database: ''
})

let queryDB = function (sql, arr) {
  return new Promise((resolve, reject) => {
    // pool.
    pool.getConnection(function(err, connection) {
      // 使用连接
      connection.query( 'SELECT something FROM sometable', function(err, rows) {
        // 使用连接执行查询
        connection.release();
        //连接不再使用，返回到连接池
      });
    });
  })
}