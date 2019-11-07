#!/usr/bin/env node
/*
 * @Author: 席鹏昊
 * @Date: 2019-11-07 13:57:04
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-07 14:50:34
 * @Description: 
 */
const child_process = require("child_process");

const fs = require("fs");
const path = require("path");

let pathName = path.join(__dirname, process.argv[2])
console.log(process.argv[2],"+++++++")
let chilPath=childConter()
function childConter() {
    if (fs.existsSync(pathName)) {
        let child = child_process.spawn("node", [pathName]);

        child.stdout.on("data", (data) => {
            console.log("spawn out", data.toString())
        })
        child.stderr.on("data", (err) => {
            console.log("error", err.toString())
        })
        return child

    }else{
        console.log("此路径不存在")
    }
  
}

let where = fs.watch(pathName);
where.on("change", () => {
    console.log("server.js改变了")
    chilPath.kill();
    chilPath=childConter()
})