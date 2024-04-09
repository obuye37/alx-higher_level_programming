#!/usr/bin/node
exports.callMeMoby = function callMeMoby ( a, b) {
    while(a) {
        b()
        a--
    }
}