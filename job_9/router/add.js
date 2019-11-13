/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 14:21:55
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-13 14:30:00
 * @Description: 
 */
const router=require("koa-router")();

router.post("/api/add",async (ctx,netx)=>{
    let {remark,type,sort,time}=ctx.request.body;
    await ctx.mysql.query("insert into logo (remark,type,sort,time) values (?,?,?,?)",[remark,type,sort,time])
    ctx.body={code:1,msg:"添加成功"}
})


module.exports=router