// var input = 150
// var store =''
// for (i=1 ; i<input+1 ; i++) {
//   store += (i.toString())[i.toString().length-1]+' '
// }no
// console.log(store)

//  deret = deret + number

 // var size = 12 //caseA
// var size = 123 //caseB
var size = 1234 //caseC
​
var number = ''
var deret = ''
​
//kita lakukan looping dari angka 1 sampai angka ke-size
for (var i = 0; i <= size; i++) {
    //jika angka >= 10, kita ambil satuannya
    if (i >= 10) {
        //buat looping baru untuk melakukan pengurangan
        for (var j = 1; j <= Math.floor(size/10); j++) { 
            if (i >= 10*j && i < 10*(j + 1)) { //number dicacah per 10 bagian
                number = (i - 10*j) //<<<=============kalkulasi angka satuan disini
            }
        }
    } 
    //jika angka < 10, langsung kita ambil saja
    if (i < 10) {
        number = i
    }
    deret = deret + number
}
console.log(deret)