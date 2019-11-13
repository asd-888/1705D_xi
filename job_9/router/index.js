/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 14:19:01
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-13 14:40:21
 * @Description: 
 */
const router=require("koa-router")();
//添加
const add=require("./add");
//删除
const de=require("./delete");
//修改
const update=require("./update");


router.use(add.routes())

router.use(de.routes())

router.use(update.routes())
module.exports=router