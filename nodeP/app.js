// 搭建后台环境

let koa = require("koa")
let cors = require("@koa/cors")   // 引入跨域模板

let app = new koa()
app.use(cors())  // 允许该函数进行跨域操作
app.use(async data => {
    data.body = "<p>我是后台返回的数据P标签</p>"
})
app.listen(8080)
console.log("程序已经启动....运行在8080端口")