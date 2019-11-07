/*
 * @Author: 席鹏昊
 * @Date: 2019-11-07 15:54:35
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-07 16:06:36
 * @Description: 
 */
const children=require("child_process");

const app=require("http");

let afrn=app.createServer((req,res)=>{
    if(req.url==='/text'){
       let son=children.fork("./son.js");
       son.on("message",(a)=>{
        res.end(`${a}`)
       })

        
    }
})

afrn.listen(8080,()=>{
    console.log("服务启动成功")
})