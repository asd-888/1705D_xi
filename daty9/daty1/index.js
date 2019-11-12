/*
 * @Author: 席鹏昊
 * @Date: 2019-11-11 19:02:56
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-11 20:54:25
 * @Description: 
 */
const Koa=require("koa");

const ruoter=require("koa-router")();
const static=require("koa-static");
const badyParser=require("koa-bodyparser");
const path=require("path");
const query=require("./db/query.js");
let app=new Koa();

app.use(static(path.join(process.cwd(),"public")))

ruoter.get("/api/list",async (ctx,next)=>{
    console.log(query)
    let a=await query("select * from niubi");
  
    ctx.body=a
})
app.use(badyParser())
app.use(ruoter.routes())


app.listen(3000,()=>{
    console.log("服务启动成功")
})