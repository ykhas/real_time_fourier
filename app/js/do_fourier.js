var zeros = require("zeros")
var ops = require("ndarray-ops")
var fft = require("ndarray-fft")

console.log("I asmalskj")
console.log("HELLO TO YANIV")
var x = ops.random(zeros([256, 256]))
  , y = ops.random(zeros([256, 256]))
 
//Forward transform x/y 
result = fft(1, x, y)
 
//Invert transform 
result2 = fft(-1, x, y)

console.log(result)

console.log("HELLO")