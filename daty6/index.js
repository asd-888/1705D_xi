/*
 * @Author: 席鹏昊
 * @Date: 2019-11-08 14:30:52
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-08 16:09:42
 * @Description: 
 */
const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {

    if (req.url === "/json") {

        res.end(JSON.stringify({ code: 1, msg: [1, 2, 3, 4] }))
    } else if (req.url === "/txt") {
        res.end("text/plain")
    } else if (req.url === "/jpg") {
        if (fs.existsSync("./img/5267e1813f79e85550e755a68e13943.jpeg")) {
            let imgBuf = fs.readFileSync("./img/5267e1813f79e85550e755a68e13943f.jpeg")
            res.end(imgBuf)
        }else {
            res.end("路径不存在")
        }


    }
})

server.listen(3000, () => {
    console.log("3000服务启动成功")
})