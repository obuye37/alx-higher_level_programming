#!/usr/bin/node
const  { argv } = require('node:process') 
let integer = parseInt(argv[2])
if (!integer) {
    console.log("Missing number of occurrences")
}
if(integer){
    while(integer) {
        console.log("C is fun")
        integer--
    }
}