const fs = require('fs')
const path = require('path')

let mypath = path.resolve('./text.txt')

const stream = fs.createReadStream(mypath , {
   encoding: 'utf-8' , 
    highWaterMark: 64 
})

stream.on('data' , ((chunck)=>{
    console.log(chunck)
    console.log(chunck.length)
    setTimeout(()=>{
        stream.pause()
        console.log('paused')
    },3000)

    setTimeout(()=>{
        stream.resume()
        console.log('resumed')
    }, 6000)
}))
 

stream.on('end' , (()=>{
    console.log('the data is end')
}))