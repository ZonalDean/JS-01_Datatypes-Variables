let a = undefined;
let b = null;
let c = b + "4 2";

let d = +a ;
let e = +b ;
let f = +c ;

console.log(d); // NaN because undefined
console.log(e); // 0
console.log(f); // Nan because "4 2"