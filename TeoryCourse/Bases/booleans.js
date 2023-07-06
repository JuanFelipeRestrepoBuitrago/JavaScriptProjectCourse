console.log("false value: " + false)
console.log("Without Parameters: " + Boolean()); // false
console.log("0: " + Boolean(0)); // false
console.log("null: " + Boolean(null)); // false
console.log("NaN:" + Boolean(NaN)); // false
console.log("undefined" + Boolean(undefined)); // false
console.log("Empty String: " + Boolean("")); // false
console.log("Greater or Equal to 1: " + Boolean("2")); // true
console.log("Objects, even empty {}:" + Boolean({})); // true
console.log("Functions, even empty: " + Boolean(function(){})); // true
console.log("true value: " + true); // true
console.log(); // true