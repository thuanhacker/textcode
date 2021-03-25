<! DOCTYPE html>
  <head>
  </head>
<body>
  <pre>
  var mysql = require('mysql');
//Khởi tao kết nối với MySQL Server
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234"
});
//Tiến hàng kết nối
con.connect(function(err) {
  if (err) throw err;
  //Kết nôi thành công
  console.log("Connected!");
  //Tiến hành khởi tạo databse
  con.query("CREATE DATABASE freetuts", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
con.query("CREATE DATABASE [IF NOT EXISTS] database_name
[CHARACTER SET charset_name]
[COLLATE collation_name]", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
</pre>
</body>
