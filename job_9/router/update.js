/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 14:36:46
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-14 14:11:02
 * @Description: 
 */
const router=require("koa-router")();

router.post("/api/update",async (ctx,next)=>{
    let {id,remark,type,sort,time}=ctx.request.body;
    if(!id || !remark || !type ||!sort || !time){
        return ctx.body={code:0,msg:"缺少参数"}
    }
    try{
        console.log(id,remark,type,sort,time)

      let a=await ctx.mysql.query("update logo set remark=?,type=?,sort=?,time=? where id=?",[remark,type,sort,time,id]);
      console.log(a,"+++++++++++")
        ctx.body={code:1,msg:"修改成功"}
    
    }catch(e){
        console.log(222, e)
        ctx.body={code:2,msg:"修改失败"}
    }
   
})



module.exports=router