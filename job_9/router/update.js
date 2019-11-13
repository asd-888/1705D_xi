/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 14:36:46
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-13 14:40:49
 * @Description: 
 */
const router=require("koa-router")();

router.post("/api/update",async (ctx,next)=>{
    let {id,remark,type,sort,time}=ctx.request.body;

    await ctx.mysql.query("update logo set remark=?,type=?,sort=?,time=? where id=?",[remark,type,sort,time,id]);
    ctx.body={code:1,msg:"修改成功"}

})



module.exports=router