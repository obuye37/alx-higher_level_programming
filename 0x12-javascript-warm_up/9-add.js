#!/usr/bin/node
const {argv} = require('node:process')
let a = parseInt(argv[2]), b = parseInt(argv[3])
function add (a, b) {
    console.log(a + b)
}
add(a, b)