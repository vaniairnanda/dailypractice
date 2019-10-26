var max = 5;

// segitiga siku kiri biasa
// for (i = 0; i < max; i++) {
//     var triangle = '';
//     for (j = 0; j <= i; j++)
//     triangle += '*';
//     console.log(triangle)
// }

// segitiga siku kiri terbalik
for (i = 0; i < max; i++) {
    var triangle2 = '';
    for (j= max; j > i; j--)
    triangle2 += '*';
    console.log(triangle2);
}

// 123456789
var number = 19
for (i = 0; i < 1; i++) {
    var deret = '';
    for (j = 1; j <= number; j++)
    if (j % 6 === 0) {
        deret += '*';
    } else if (j >= 10) {
        j = j.toString()
        deret += (j.toString())[j.toString().length-1] + '';
    } else {
        deret += 0 + j;
    } 
    console.log(deret);
    
}

// // // 
//     *
//    **
//   ***
//  ****
// *****

// var baris = 5;
// for (i = 0; i < baris; i++) {
//     var star = '-';
//     for (j = baris; j > i; j--) {
//         star += '-';
//     } for (k = 0; k <= j; k++) {
//         star += '*'
//     }
//         console.log(star)
//     } 

 

// // segi siku kanan terbalik
// var baris = 5
// for (i = 0; i < baris; i++) {
//     var star = '';
//     for (j = 0; j <= i; j++) {
//         star += ' ';
//     } for (k = baris; k > i; k--) {
//         star += '*'
//     } 
//     console.log(star)
// }

// // pyramid terbalik
// var baris = 5
// for (i = 0; i < baris; i++) {
//     var star = '-';
//     for (j = 0; j <= i; j++) {
//         star += ' ';
//     } for (k = baris*2; k > (2*i+1); k--) {
//         star += '*';
//     } 
//     console.log(star)
// }

// pyramid biasa

var baris = 5
for (i = 0; i < baris; i++) {
    var star = '-';
    for (j = 1; j < baris - i; j++) {
        star += ' ';
    } for (k = baris / 2; k <= (2*i+1); k++) {
        star += '*';
    } 
    console.log(star)
}