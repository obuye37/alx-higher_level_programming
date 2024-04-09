#!/usr/bin/node
const  { argv } = require('node:process') 
!argv[2] ? console.log("No argument")
: console.log("Argument found")  
