#!/usr/bin/node

module.exports = class Rectangle {
    constructor(w, h) {
        this.width = w
        this.height = h
        this.ch = this.height
        this.cw = this.width
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

    rotate() {
        if( this.cw <= 0 || this.ch <= 0 || !this.ch || !this.cw) {
            return
        } 
        let height = this.cw
        let width = this.ch
        const arr = new Array(width).fill("X")
        let char = ""

        while(height) {
            arr.forEach((val, _) => {
                char += val
            })
            console.log(char)
            char = ""
            --height
        }
    }

    double() {
        this.cw *= 2
        this.ch *= 2
        if( this.cw <= 0 || this.ch <= 0 || !this.ch || !this.cw) {
            return {}
        }
        const arr = new Array(this.cw).fill("X")
        let char = ""
        let height = this.ch
        while(height) {
            arr.forEach((val, _) => {
                char += val
            })
            console.log(char)
            char = ""
            --height
        }
    }
}