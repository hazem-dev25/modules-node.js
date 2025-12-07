const { log } = require('console');
const path = require('path');

let mypath = 'C:/Users/1/OneDrive/Desktop/route(Backend)/module_in.js'

let pAth = './route(Backend)'

let obj_path = 
 {
  root: 'C:/',
  dir: 'C:/Users/1/OneDrive/Desktop/route(Backend)',
  base: 'module_in.js',
  ext: '.js',
  name: 'module_in'
}


console.log(__dirname);

console.log(__filename);

console.log(path.basename(mypath));

console.log(path.extname(mypath));

console.log(path.isAbsolute(mypath))

console.log(path.resolve(pAth))

function join(from , to) {
    return path.join(from , to);
}

console.log(join('OneDrive/Desktop','route(Backend)/module_in.js'))


console.log(path.parse(mypath))

console.log(path.format(obj_path))


