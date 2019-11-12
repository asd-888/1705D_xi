/*
 * @Author: 席鹏昊
 * @Date: 2019-11-12 09:34:09
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-12 19:13:20
 * @Description: 
 */
const Koa=require("koa");
const router=require("koa-router")();
const bodyParser=require("koa-bodyparser");
let query=require("./db/query");
let app=new Koa();


//添加
// router.get("/api/add", async (ctx,next)=>{
//     let {name,pwd}=ctx.query;

//     if(!name&&!pwd){
//         ctx.body={code:2,msg:"缺少参数"}
//     }
//     let judge=await query("select * from shi where name=?",[name])
//     if(judge.length){
//         ctx.body={code:0,msg:"此人已存在"}
//     }else{
//          await query("insert into shi (name,pwd) values (?,?)",[name,pwd]);
//         ctx.body={code:1,msg:"添加成功"}
//     }
// })
// //删除
// router.get("/api/delect",async (ctx,next)=>{
//     let {name}=ctx.query;

//     let user=await query("delete from shi where name=?",[name]);
//         ctx.body={code:1,msg:"删除成功"}

// })

// //修改
// router.post("/api/update",async (ctx,next)=>{
//     let {id,name}=ctx.request.body;

//     let user=await query("update shi set name=? where id=?",[name,id]);
//     ctx.body={code:1,msg:"修改成功"}

// })



//添加
router.get("/api/add",async (ctx,next)=>{
    let {name,pwd}=ctx.query;

    if(!name&&!pwd){
        ctx.body={code:0,msg:"缺少参数"}
    }   
    let user=await query('select * from shi where name=?',[name]);
    if(user.length){
        ctx.body={code:2,msg:"此人已存在"}
    }else{
        try{
            await query("insert into shi (name,pwd) values (?,?)",[name,pwd]);
            ctx.body={code:1,msg:"添加成功"}
        }catch(e){
            ctx.body={code:3,msg:e.error}
        }
      
    }
})

// 删除
router.get("/api/delete",async (ctx,next)=>{
    let {name,pwd}=ctx.query;
    console.log(name,pwd,"++++++")
    if(!name||!pwd){
      return  ctx.body={code:0,msg:"缺少参数"}
    }   
    try{
        await query("delete from shi where name=?",[name]);
        ctx.body={code:1,msg:"删除成功"}
    }catch(e){
        ctx.body={
            code:2,
            msg:e.error
        }
    }
    
})

//修改

router.post("/api/update",async (ctx,next)=>{
    let {name,pwd,id}=ctx.request.body;
    console.log(name,pwd,id,"************")
    if(!name||!pwd||!id){
        ctx.body={code:0,msg:"缺少参数"}
    }
    try{
        query("update shi set name=?,pwd=? where id=?",[name,pwd,id]);
        ctx.body={code:1,msg:"修改成功"}
    }catch(e){
        ctx.body={code:2,msg:e.erroe}
    }
})

//模糊搜索

router.post("/api/dim",async (ctx,next)=>{
    let {na}=ctx.request.body;
    console.log(na,"+++++++++")
    if(!na){
        ctx.body={code:0,msg:"缺少参数"}
    }

    try{
      let dim= await query(`select * from shi where name like "%${na}%"`)
        ctx.body={code:1,msg:dim}
    }catch(e){
        ctx.body={code:2,msg:e.erroe}
    }
})






app.use(bodyParser())
app.use(router.routes());
app.listen(3000,()=>{
    console.log("服务启动成功")
})