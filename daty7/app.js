#!/usr/bin/env node
/*
 * @Author: 席鹏昊
 * @Date: 2019-11-09 09:01:53
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-09 09:34:31
 * @Description: 
 */

const fs = require("fs");

const child_process = require("child_process");
const path = require("path")
let filterName = path.join(__dirname, process.argv[2]);

let patnChild=content()
function content() {
    if (fs.existsSync(filterName)) {

        let childPath = child_process.spawn("node", [filterName]);

        childPath.stdout.on("data", data => {
            console.log(data)
        })
        childPath.stderr.on("data", data => {
            console.log(data)
        })
        return childPath

    } else {
        console.log("路径错误")
    }
}


let watch = fs.watch(filterName);

watch.on("change", () => {
    console.log("子进程改变了")
    patnChild.kill();
    patnChild=content()
})