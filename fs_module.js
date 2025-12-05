const fs = require ("fs"); 


function mkdir(folder) {
    return fs.mkdir(folder ,((err)=>{
        if(err) {
            console.log('its err')
        }else{
            console.log('success')
        }
    }))
}

mkdir('folder')

function remove(file) {
    return fs.unlink(file , ((err)=>{
        if(err) {
            console.log('its err') 
        }else{
            console.log('success')
        }
    }))
}

remove('note.txt')

function write(file) {
    return fs.writeFile('file.txt' , file, ((err)=>{
        if(err) {
            console.log('err')
        }else{
            console.log('success')
        }
    }))
}

write('"Hi world"')

function read(file) {
    return fs.readFile(file, 'utf8',((err , data)=>{
        if(err) {
            console.log('err')
        }else{
            console.log('success' ,data)
        }
    }))
}

read('./file.txt')

function isexist(file) {
    return fs.existsSync(file)
}

console.log(isexist('./isexist.txt'))

