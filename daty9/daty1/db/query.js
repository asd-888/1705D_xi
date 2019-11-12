/*
 * @Author: 席鹏昊
 * @Date: 2019-11-11 19:44:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-11 20:52:19
 * @Description: 
 */
const mysql=require("./index");

module.exports=(sql,params=[])=>{
    console.log(sql,"+++++++")
    return new Promise((res,rej)=>{

        mysql.query(sql,params,(error,data)=>{
            if(error){
                rej({error})
            }else{
                res(data)
            }
        })
    })
}