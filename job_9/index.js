/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 14:07:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-06 19:13:21
 * @Description: 
 */
const Koa=require("koa");
const bdoyparser=require("koa-bodyparser");
const router=require("./router/index");

let query=require("./middleware/index");
let app=new Koa();
app.use(bdoyparser())
app.use(query())
app.use(router.routes())
app.listen(3000,()=>{
    console.log("服务启动失败 ，再次确认")
})

let a="试一试"