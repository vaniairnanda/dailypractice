// // // mau bikin 123456789
// // // gunakan loop 
// // var size = 19

// // for (i = 1; i <= 1; i++) { //kenapa i <=1? karena cuma mau bikin sebaris
// //     var deret = "";
// //     for(j = 1; j <= size; j++) { //kenapa j<= size? karena mau bikin urutan sampe 19
// //        deret +=; // ini supaya nambah dr 1 jd 1+1, 2+1, dsb
// //     }
// // }
// // console.log(deret);

// //mau bikin *****
// var rows5 = 5; //ini cuman buat ngasitau mau berapa banyak
// var star = ''; //ini buat nyimpen hasilnya, awalnya kan kosong
// for (var i = 1; i <= rows5; i++) { // ini artinya mulai dr mana, mau sampe kapan (sampe dah 5), trs nambahkah
//     star += '*'; //nah abis itu br ni tiap loop dia mo nambah berapa
// } console.log(star)

// // kalo mau ngitung mundur jg bisa pake ini (var i = 5; i >= 0; i--) 

// // mau bikin *****
// //           *****
// //           *****
// //           *****
// // //
// var rows6 = 5;

// for (var i = 1; i <= rows6; i++) {
//     var star2 = '';
//     for (var j = 0; j <= rows6; j++) {
//         star2 += '*';
       // console.log(star2) kl kamu taro consolelog disini, keprint nya dr *, **, ***
    
// } // console.log(star2) kl disini, begitu udah 5bintang (<=rows6), baru keprint
// } // kl di luar loop, maka keprint ****** bintang tp sebaris aja

// mau bikin *
//           **
//           ***
//           **** dst

// var rows7 = 5;

// for (var i = 1; i >= 1; i--) { // jd disini cuma nentuin mau ada berapa piramid, krn cuma butuh 1 
//     var star7 = ''; // maka i >= 1, jd sekali abis itu kelar
//     for(var j = 1; j <= rows7; j++) {
//         star7 += '*';
//         console.log(star7); // sampe console ini bentuknya udah jd piramid
//     } 
// } 

// skrg gmn kl mau bikin abcde 
//                       abcde
//                       abcde

var rows8 = 5;
for (var i = 1; i <= rows8; i++) {
    var abc = 'abcde'
    for(var j = abc.length -1; j < rows8 - 1; j++) {
        abc += '' + abc[0+j];

    } console.log(abc);
    
}