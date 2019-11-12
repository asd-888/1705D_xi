/*
 * @Author: 席鹏昊
 * @Date: 2019-11-09 09:01:43
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-09 11:28:03
 * @Description:    
 */
const child_process = require("child_process");
const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
    switch (req.url) {
        case "/json":
            res.writeHead(200,{'Content-Type':"application/json"})
        return res.end(JSON.stringify({code:1,msg:[1,2,3,5,6,7]}))
            break;
        case "/text":
            res.writeHead(200,{'Content-Type':"text"})
            return res.end("text/plain")
            break;
        case "/jpg":
            let imgs=fs.readFileSync("./img/1.jpeg")
            res.writeHead(200,{'Content-Type':"jpg"})
            console.log(imgs)
            return res.end(imgs)
            break;

        default:
            return res.end("ok")
            break;
    }
})
if(fs.lstatSync("./img").isDirectory()){
    console.log("这是个文件夹")
}else{
    console.log("这是文件")
}

server.listen(3000, () => {
    console.log("3000服务启动成功")
})