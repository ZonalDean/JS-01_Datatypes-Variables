let a = undefined;
let b = " ";
let c = !b;

let d = !!a;
let e = !!b;
let f = !!c;

console.log(d); // false because undefine
console.log(e); // true because whitespace
console.log(f); // false because !b = 0 = false