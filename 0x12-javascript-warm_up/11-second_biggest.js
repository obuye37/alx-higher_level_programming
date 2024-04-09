#!/usr/bin/node
const { argv } = require('node:process')
const int = []
argv.forEach((value, _)=>{
    let numOnly = parseInt(value)
    if(numOnly) int.push(numOnly)
})

function secondBiggestValue () {
    const secBiggest = int.filter(arg => Number.isInteger(arg)).sort((a, b) => b - a);
    if(secBiggest.length < 2) return 0
    return secBiggest[1]
}
console.log(secondBiggestValue())