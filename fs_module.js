const fs = require ("fs"); 

function mkdir(folder) {
    return fs.mkdir(folder ,((err)=>{
        if(err) {
            console.log('its err')
        }else{
            console.log('succes')
        }
    }))
}

mkdir('folder')