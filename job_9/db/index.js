/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 14:10:47
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-13 14:27:28
 * @Description: 
 */
const Mysql = require("mysql");

let connection = Mysql.createConnection({
    user: "root",
    password: "root",
    port: 3306,
    host: "localhost",
    database: "data"
})

connection.connect((error) => {
    if(error){
        console.log("连接失败")
    }else{
        console.log("连接成功")
    }
})

module.exports=connection