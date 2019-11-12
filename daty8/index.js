/*
 * @Author: 席鹏昊
 * @Date: 2019-11-10 19:28:32
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-10 19:39:30
 * @Description: 
 */
const children=require("child_process");

const http=require("http");
const fs=require("fs");
let cerver=http.createServer((req,res)=>{
    if(req.url==="/json"){
        res.writeHead(200,{"Content-Type":"/json"})
        res.end(JSON.stringify({code:1,msg:[1,2,3,4,5,6]}))

    }else if(req.url==="/text"){
        res.writeHead(200,{"Content-Type":"/text"})
        res.end("/text")
    }else if(req.url==="/jpg"){
        res.writeHead(200,{"Content-Type":"/jpg"})
        let urlBf=fs.readFileSync("./img/1.jpeg")
        res.end(urlBf)
    }else{
        res.end("ok")
    }
})

cerver.listen(3000,()=>{
    console.log("服务启动成功")
})