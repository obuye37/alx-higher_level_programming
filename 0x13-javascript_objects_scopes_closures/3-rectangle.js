#!/usr/bin/node

module.exports = class Rectangle {
    constructor(w, h) {
        this.width = w
        this.height = h
    }
    print() {
        if( this.width <= 0 || this.height <= 0 || !this.height || !this.width) {
            return
        }
        const arr = new Array(this.width).fill("X")
        let char = ""
        while(this.height) {
            arr.forEach((val, _) => {
                char += val
            })
            console.log(char)
            char = ""
            --this.height
        }
    }
}



