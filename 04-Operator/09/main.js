let a = 1 * "4" + +null + +" " - "5" * 2 + +(7 + 2 + "" + +!!undefined);

console.log(a) ;

// 84 because
// (7 + 2 + "" + +!!undefined) = 90 because 7+2=9 string 
// 1 * "4" + +null + +" " - "5" * 2 + + = -8
// 90 - 8 = 84