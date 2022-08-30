// mang trong js
// luu nhieu gia tri khac nhau trong 1 bien don
// bo suu tap du lieu theo 1 thu tu nao do
// cu phap : []
let fruits = []; // mang rong - khong co phan tu nao
// kiem tra so luong phan tu
console.log(fruits.length);
let numbers = [1,2,3,4,5,6,7,8,9,'mot','hai',true,false];
// cac phan tu nam trong mang khong bat buoc phai cung kieu du lieu voi nhau
// kieu du lieu cua Array : la object
console.log(typeof numbers);
// mang nhieu chieu: gia tri ben trong mang lai la 1 mang(khong phai la gia tri don)
let numbers2 = [1,2,3,['cat','dog','pig'],[10,20]];
// vi tri(index-key) cua phan tu nam trong mang
// phan tu dau tien nam trong mang dc danh so thu tu la : 0
// cach truy cap vao 1 phan tu nam trong mang
// cu phap: nameArray[index];
console.log(numbers2[3][2]);
let t = numbers2[3];
console.log(t[2]);

const numbers3 = [1,2,3,4,5,6,7,8,9];
// duyet qua tat ca cac phan tu nam trong mang
// 1 - for
let max = numbers3.length;
for(let i = 0; i < max; i++ ){
    console.log(numbers3[i]);
}
// forEach
numbers3.forEach((value, key, arr) => {
    // value: gia tri cua phan tu
    // key: vi tri cua phan tu
    // arr: mang ban dau dem ra duyet
    console.log(`key: ${key} - value: ${value}`);
});
// for...of
for(let j of numbers3){
    console.log(j);
}
//
const myNumbers = [1,2,3,4,5];
myNumbers.push(6);
console.log(myNumbers);
let last = myNumbers.pop();
console.log(myNumbers, last);
let newArr = myNumbers.slice(1,3);
console.log(myNumbers, newArr);
myNumbers.splice(3,3,100,200,30);
console.log(myNumbers);

if(Array.isArray(myNumbers)){
    // myNumbers la mang
}
let randomNumbers = [10,1,5,6,2,7,3,9,4,8];
// sap xep mang theo tang dan hoac giam dan
randomNumbers.sort((b,a) => b-a);
console.log(randomNumbers);

let result = [];
randomNumbers.forEach(item => {
    if(item % 2 === 0){
        result.push(item);
    }
});
console.log(result);
let r = randomNumbers.filter(function(item){
    if(item % 2 === 0){
        return item;
    }
});
console.log(r);
let s = randomNumbers.filter(item => item % 2 !== 0).reduce((prv,curr) => prv + curr);
console.log(s);

function sumNumber(...n){
    // rest param
    // chinh la 1 array chua toan bo cac tham so dai dien truyen vao
    //console.log(n);
    //return a + n;
    return n.reduce((p,c) => p+c);
}
sumNumber(1,2,3,4,5,6,7,8,9);
