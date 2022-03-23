let a = undefined;
let b = 2;
let c = a++;

let d = String(a)
let e = String(b)
let f = String(d)

console.log(d) // NaN
console.log(e) // 2
console.log(f) // Nan