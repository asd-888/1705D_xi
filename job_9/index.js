/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 14:07:55
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-13 14:21:47
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
    console.log("服务启动成功")
})