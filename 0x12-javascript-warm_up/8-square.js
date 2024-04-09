#!/usr/bin/node
const  { argv } = require('node:process') 
let integer = parseInt(argv[2])
if (!integer) {
    console.log("Missing size")
}
if (integer) {
    const arr = new Array(integer).fill("X")
    let output = ""
    while(integer) {
        arr.forEach((val, index)=> {
            output+=val
        })
        console.log(output)
        integer--
        output=""
    }
}