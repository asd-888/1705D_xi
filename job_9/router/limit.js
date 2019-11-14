/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 19:17:06
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-13 20:00:26
 * @Description: 
 */
const router=require("koa-router")();

router.get("/api/limit",async (ctx,next)=>{
    let {pagenum=1,limit=2}=ctx.query;
    let begin=(pagenum-1)*limit;
    let num=await ctx.mysql.query("select count(*) from logo")
    let user= await ctx.mysql.query(`select * from logo limit ${begin},${limit}`);
    ctx.body={
        code:1,
        msg:user,
        cum:num[0]["count(*)"]
    }
})

module.exports=router