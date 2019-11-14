/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 14:21:55
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-14 13:47:39
 * @Description: 
 */
const router=require("koa-router")();

router.post("/api/add",async (ctx,netx)=>{
    let {remark,type,sort,time}=ctx.request.body;
    if(!remark || !type ||!sort || !time){
        return ctx.body={code:0,msg:"缺少参数"}
    }
    try{
        await ctx.mysql.query("insert into logo (remark,type,sort,time) values (?,?,?,?)",[remark,type,sort,time])
        ctx.body={code:1,msg:"添加成功"}
    }catch(e){
        ctx.body={code:2,msg:"添加失败"}
    }

})


module.exports=router