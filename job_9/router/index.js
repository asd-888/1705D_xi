/*
 * @Author: 席鹏昊
 * @Date: 2019-11-13 14:19:01
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-13 19:35:43
 * @Description: 
 */
const router=require("koa-router")();
//添加
const add=require("./add");
//删除
const de=require("./delete");
//修改
const update=require("./update");
//搜索全部
const select =require("./select");
//分页
const limit=require("./limit");
router.use(add.routes())

router.use(de.routes())

router.use(update.routes())

router.use(select.routes())

router.use(limit.routes())
module.exports=router