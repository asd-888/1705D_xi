/*
 * @Author: 席鹏昊
 * @Date: 2019-11-11 19:41:51
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-11 19:51:19
 * @Description: 
 */
const Mysql=require("mysql");

let connection=Mysql.createConnection({
    user:"root",
    password:"root",
    host:"localhost",
    port:"3306",
    database:"data"
    
})

connection.connect((error)=>{
    if(error){
        console.log("数据连接失败")
    }else{
        console.log("数据连接成功")
    }
})

module.exports=connection