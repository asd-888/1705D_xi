/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 19:10:13
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-13 19:13:45
 * @Description: 
 */
const router=require("koa-router")();

router.get("/api/select",async (ctx,next)=>{
    
   let user=await ctx.mysql.query("select * from logo");

    ctx.body={code:1,msg:user}
})

module.exports=router