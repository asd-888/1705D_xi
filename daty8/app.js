#!/usr/bin/env node
/*
 * @Author: 席鹏昊
 * @Date: 2019-11-10 19:40:31
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-11 08:27:22
 * @Description: 
 */
console.log(11)

const fs = require("fs");
const path = require("path");
let a = path.join(process.cwd(), process.argv[2]);
console.log(a)


if (fs.statSync(a).isDirectory()) {
   let b= fs.readdirSync(a)
    for(var i=0;i<b.length;i++){
        console.log(b[i])
        console.log(fs.readFileSync(path.join(a,b[i])) )
    }

} else {

    if (fs.existsSync(a)) {
        console.log(fs.readFileSync(a))
    } else {
        console.log("此路径不存在")
    }
}


