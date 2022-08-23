// tu khoa khai bao bien
// 1 - tu khoa var
var myName = 'TrieuNT';//string
var myAge  = 21; // number
// 2 = tu khoa let
let myAddress = 'HN';
let myPhone = '2132234';
// tu khoa khai bao hang so
// tieu chuan dat ten hang so : viet hoa va cach nhau dau gach duoi
const PI = 3.14;
const MY_EMAIL = 'my@example.com';
// khong dc phep thay doi truc tiep cua hang so trong qua trinh su dung
// PI = 3.15; // error
console.log(PI);

// phan biet tu khoa var va let trong khai bao bien
let myJobs = 'dev';
//let myJobs = 'student'; // error : dinh nghia lai bien
myJobs = 'student'; // thay doi gia tri cua bien
// tu khoa let khong cho phep dinh lai bien da ton tai - tu khoa var thi dc
console.log(myJobs);

// scope : pham vi hoat dong 
let number = 10; // (1)
if(true){
    let number = 20; // (2)
    if(true){
        let number = 30; //(3)
        console.log(number); //30
    }
    console.log(number); // 20
}
console.log(number); // 10

// if ... else 
// if(number > 20){
//     console.log('A');
// } else {
//     console.log('B');
// }

// if ... else long nhau
if(number > 20){
    console.log('A1');
} else if(number > 5) {
    console.log('A2');
} else if(number > 3) {
    console.log('A3');
} else {
    console.log('A4');
}

switch(number){
    case 10:
        console.log('B1');
        break;
    case 20:
        console.log('B2');
        break;
    default:
        console.log('B3');
        break;
}
// vong lap
// 1 - for ...
for(let i = 1; i < 10; i++){
    console.log(`gia tri cua i = ${i}`);
}
// while
let j = 15;
while( j <= 25){
    if(j % 2 !== 0){
        console.log('gia tri cua j = ' + j);
    }
    j++;
}
let v = 1;
do {
    console.log('gia tri cua v = ' + v);
    v++;
} while (v < 10);

// dung vong lap while;
// in ra het cac so le tu 15 - 25;

let x = 10;
let y = 5;
x += y; // x = x + y
console.log(x); // ???
let checking = false;
if(checking === 0){
    console.log('Yes');
} else {
    console.log('No');
}
let a = 10;
let b = 20;
let c = (a++) + (++b) - (b++) - (--a) + (b--) + (++a);
//  c =   10  +   21  - 21    - 10    + 22  + 11
//  33  
console.log(c);
// 53 (1)
// 33 (3)
// 32 (2)
// 54 (1)
// 29 
// 30