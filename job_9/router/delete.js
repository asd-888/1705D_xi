/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 14:30:51
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-13 14:36:34
 * @Description: 
 */
const router=require("koa-router")();

router.get("/api/delete",async (ctx,next)=>{
    let {id}=ctx.query;
    await ctx.mysql.query("delete from logo where id=?",[id]);
    ctx.body={code:1,msg:"删除成功"}
})


module.exports=router