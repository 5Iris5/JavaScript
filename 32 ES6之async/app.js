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
            // console.log(data.toString())
            let step2Data = data.toString();
            // console.log(step2Data)
            res(step2Data)   // 将读取的内容传递出去 被await接收后赋值给到step1!!!
        })
    })
    console.log(step1)
    console.log(typeof step1)

    let step2 = await new Promise((res, rej) => {
        console.log(step1)
        console.log(typeof step1)
        fs.readFile(step1, function(err, data){
            console.log(step1)
            // let step3Data = data.toString();
            res(data)  
            console.log(data)  // undefined ->  why???
        })
    })
    // console.log(step2)

    // let step3 = await new Promise((res, rej) => {
    //     fs.readFile(step2, function(err, data){
    //         let step4Data = data.toString();
    //         res(step4Data)
    //     })
    // })
    // console.log(step3)
}

readFile();