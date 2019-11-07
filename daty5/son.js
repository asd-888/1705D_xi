/*
 * @Author: 席鹏昊
 * @Date: 2019-11-07 15:54:52
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-07 16:05:39
 * @Description: 
 */
let sum=0;
let setTime=new Date().getTime();
for(var i=0;i<22222222;i++){
    sum+=i
}
let entTime=new Date()*1;
let a=entTime-setTime

process.send(a)