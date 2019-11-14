/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 14:30:51
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-14 13:49:18
 * @Description: 
 */
const router=require("koa-router")();

router.get("/api/delete",async (ctx,next)=>{
    let {id}=ctx.query;
    if(!id){
     return  ctx.body={code:0,msg:"缺少参数"}
    }
    try{
         await ctx.mysql.query("delete from logo where id=?",[id]);
    ctx.body={code:1,msg:"删除成功"}
    }catch(e){
        ctx.body={code:2,msg:"删除失败"}
    }
   
})


module.exports=router