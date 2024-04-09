#!/usr/bin/node
const  { argv } = require('node:process') 
let integer = parseInt(argv[2])
if (!integer) {
    console.log("Not a number")
}
if (integer) {
    console.log("My number:", integer)
}