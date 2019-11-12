/*
 * @Author: 席鹏昊
 * @Date: 2019-11-12 10:57:52
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-12 13:39:11
 * @Description: 
 */
const Mysql=require("./index");

module.exports=(sql,params=[])=>{
    return new Promise((res,rej)=>{
        Mysql.query(sql,params,(error,data)=>{
            if(error){
                rej(error)
            }else{
                res(data)
            }
        })
    })
}