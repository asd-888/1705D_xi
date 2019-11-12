/*
 * @Author: 席鹏昊
 * @Date: 2019-11-12 10:54:16
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-12 10:57:45
 * @Description: 
 */
const Mysql=require("mysql");

let connection=Mysql.createConnection({
    user:"root",
    password:"root",
    host:"localhost",
    port:3306,
    database:"data"
})
connection.connect((error)=>{
    if(error){
        console.log("连接失败")
    }else{
        console.log("连接成功")
    }
})

module.exports=connection