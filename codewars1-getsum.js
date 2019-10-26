function GetSum( a,b ){ 
   var sumInBetween = 0
   if ( a < b) {
   for (var i = a; i <= b; i++) {
   sumInBetween = sumInBetween + i;} 
   } else if ( a > b) {
   for (var j = b; j <= a; j++) {
   sumInBetween = sumInBetween + j;} 
   } else if ( a === b) {
      sumInBetween = sumInBetween + a;
   } else {
      console.log('Incorrect operator')
   } return sumInBetween;
}

// versi canggih 
// function GetSum( a,b )
// {
//    if (a == b) return a;
//    else if (a < b) return a + GetSum(a+1, b);
//    else return a + GetSum(a-1,b);
// }
console.log(GetSum(1, 0))    // 1 + 0 = 1
console.log(GetSum(1, 2))   // 1 + 2 = 3
console.log(GetSum(0, 1))  // 0 + 1 = 1
console.log(GetSum(1, 1))   // 1 Since both are same
console.log(GetSum(-1, 0))  // -1 + 0 = -1
console.log(GetSum(-1, 2))  // -1 + 0 + 1 + 2 = 2