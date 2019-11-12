/*
 * @Author: 席鹏昊
 * @Date: 2019-11-11 14:31:17
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-11 14:35:32
 * @Description: 
 */
const mysql=require("./index");

module.exports=(sql,params=[])=>{
    return new Promise((res,rej)=>{
        mysql.query(sql,params,(error,data)=>{
            if(error){
                rej({msg:"error",error})
            }else{
                res({msg:"succeed",data})
            }
        })
    })
}