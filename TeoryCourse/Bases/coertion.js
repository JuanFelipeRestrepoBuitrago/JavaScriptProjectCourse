// Implicit Coertion
var a = 4 + "7"; // 47
console.log(a);
console.log(typeof a);

var b = 4 * "7"; // 28
console.log(b);
console.log(typeof b);

// Explicit Coertion
var c = 20;
var d = c + "";
console.log(d);
console.log(typeof d); 

var e = String(c);
console.log(e);
console.log(typeof e);

var f = Number(e);
console.log(f);
console.log(typeof f);
