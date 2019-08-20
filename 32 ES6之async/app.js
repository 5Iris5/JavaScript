// 模块 -> 先引入 后使用

/*
    1. 引入读取内容的模块
    2. 异步操作 读取文件   参数 -> 路径,捕获到的错误,读取的数据
    3. 操作读取到的数据内容   -> 确保在上一步完成的基础上

*/
let fs = require("fs")   

// fs.readFile("./01.txt", function(err,data){
//     console.log(data.toString())
// })   

async function readFile(){
    let step1 = await new Promise((res, rej) => {
        fs.readFile("./01.txt", function(err, data){
            var data = data.toString().trimEnd();  // 清除掉字符串末尾的换行符;
            // var data = JSON.parse(data);
            res(data)   // 将读取的内容传递出去 被await接收后赋值给到step1!!!
        })
    })

    let step2 = await new Promise((res, rej) => {
        fs.readFile(step1, function(err, data){
            // console.log(step1, typeof step1)
            // var data = JSON.parse(data)
            // console.log(typeof data)
            var data = data.toString().trimEnd();  
            res(data)    // undefined ->  why???  01.txt等文件夹内部有一个换行符，解析的时候没法正确匹配上！
        })
    })

    let step3 = await new Promise((res, rej) => {
        fs.readFile(step2, function(err, data){
            var data = data.toString().trimEnd();     
            res(data)
        })
    })

    let step4 = await new Promise((res, rej) => {
        fs.readFile(step3, function(err, data){
            var data = data.toString().trimEnd();
            res(data)
            console.log(data)
        })
    })
}

readFile();