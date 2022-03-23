let a = 1;
let b = 2;
let c = a++;
let d = ++c;
let e = ++d + d++ + d;

console.log(a) ; // 2
console.log(b) ; // 2
console.log(c) ; // 2
console.log(d) ; // 4
console.log(e) ; // 10