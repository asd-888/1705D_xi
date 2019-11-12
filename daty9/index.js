/*
 * @Author: 席鹏昊
 * @Date: 2019-11-11 11:31:03
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-11 16:05:41
 * @Description: 
 */
const Koa=require("koa");
const bodyParser=require("koa-bodyparser");
const static=require("koa-static");
const router=require("koa-router");
let app=new Koa();
app.use((ctx,next)=>{
    console.log(1)
    ctx.body="你说的不错"
    next()
    console.log(2)
   
})
app.use((ctx,next)=>{
    console.log(3)
    
    next()
    console.log(4)
})
app.use((ctx,next)=>{
    console.log(5)

    next()
    console.log(6)
})

app.user(bodyParser())

app.use(router.routes())

app.listen(3000,()=>{
    console.log("服务启动成功")
})