/*
 * @Author: 席鹏昊
 * @Date: 2019-11-11 11:42:10
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-11 14:31:00
 * @Description: 
 */
const Mysql = require("mysql");

let connention = Mysql.createConnection({
    user: "root",
    password: "root",
    port: 3306,
    host: "localhost",
    database: "data"
});

connention.connect((error) => {
    if (error) {
        console.log("连接失败")
    } else {
        console.log("连接成功")
    }

})

module.exports=connention;