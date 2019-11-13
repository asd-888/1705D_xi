/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 14:14:41
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-13 14:17:40
 * @Description: 
 */
const Mysql=require("../db/index");

let query=(sql,params=[])=>{
     return new Promise((resolve, reject) => {
            Mysql.query(sql,params,(error,data)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(data)
                }
            })
    })
    
}

module.exports= ()=>{
    return async (ctx,next)=>{
        ctx.mysql={};
        ctx.mysql.query=query;
        await next()
    }
}