/*
 * @Author: 席鹏昊
 * @Date: 2019-11-08 19:59:59
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-08 20:46:15
 * @Description: 
 */
const child_process = require("child_process");
const fs = require("fs");
const sum = require("os").cpus().length;
const path = require("path");

let filename = path.join(__dirname, process.argv[2])

let ServerPath = pathServer()
function pathServer() {
    if (fs.existsSync(filename)) {

        let childPath = child_process.spawn("node", [filename])

        childPath.stdout.on("data", data => {
            console.log(data)
        })
        childPath.stderr.on("data", data => {
            console.log(data)
        })
        return childPath
    } else {
        console.log("此路径不存在")
    }
}


let water = fs.watch(filename);

water.on("change", () => {
    console.log("index.js改变");
    ServerPath.kill();
    ServerPath = pathServer()

})