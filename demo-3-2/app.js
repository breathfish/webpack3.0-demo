//es6
import {sum} from './sum'
// common.js 
let sub = require('./sub');
//AMD require.js
require(['./muti'], function(muti){
    console.log('求乘积muti(3,2)', muti(3,2));
})
console.log('求和sum(1,2)', sum(1,2));
console.log('求差sub(3,2)', sub(3,2));
