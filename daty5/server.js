/*
 * @Author: 席鹏昊
 * @Date: 2019-11-07 11:45:54
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-07 14:50:54
 * @Description: 
 */
const Http=require("http");

let server=Http.createServer((req,res)=>{
    console.log(res.url,"+++++++++")
    if(req.url==="/json"){
        res.setHeader('Content-Type',"application/json")
        res.end(JSON.stringify({code:1,msg:[1,2,3]}))
    }else if(req.url==="/text"){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("text1111")
    }else if(req.url==="/jpg"){
        res.writeHead(200,{"Content-Type":"image/jpeg"})
        res.end("jpg")
    }
})

server.listen(8080,()=>{
    console.log("服务启动成功")
})