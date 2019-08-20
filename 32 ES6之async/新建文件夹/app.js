let fs = require("fs")   

// fs.readFile("./01.txt", function(err,data){
//     console.log(data.toString())
// })   

async function readFile(){
    let step1 = await new Promise((res, rej) => {
        fs.readFile("./01.txt", function(err, data){
            var data = data.toString();
            // var data = JSON.parse(data);
            res(data)   
        })
    })

    let step2 = await new Promise((res, rej) => {
        fs.readFile(step1, function(err, data){
            console.log(step1, typeof step1)
            // var data = JSON.parse(data)
            console.log(typeof data)
            // var data = data.toString();
            res(data)    // undefined ->  why???  返回的数据格式有误 toString() VS JSON.parse()
        })
    })

    // let step3 = await new Promise((res, rej) => {
    //     fs.readFile(step2, function(err, data){
    //         var data = data.toString();       
    //         res(data)
    //     })
    // })

    // let step4 = await new Promise((res, rej) => {
    //     fs.readFile(step3, function(err, data){
    //         var data = data.toString();
    //         res(data)
    //         console.log(data)
    //     })
    // })
}

readFile();