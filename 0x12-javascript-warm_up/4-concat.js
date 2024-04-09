#!/usr/bin/node
const  { argv } = require('node:process') 
if (!argv[2]) {
    console.log("undefined is undefined")
}
if (argv[2] && !argv[3]) {
    console.log(argv[2], "is undefined")  
}
if (argv[3]) {
    console.log(argv[2], "is", argv[3])
}