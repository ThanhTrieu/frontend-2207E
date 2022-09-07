// callback js
console.log('A');
setTimeout(() => {
    console.log('B');
}, 1000); 
// thuc thi 1 hanh dong nao do theo 1 khoang thoi gian quy dinh san(chi thuc thi hanh dong do 1 lan)
// ham xu ly bat dong bo
// tham so truyen vao la 1 callback(function)
console.log('C');

const test = [1,2,3,4,6,7,8,9];
function myFilter(numbers, fn){
    // fn la tham so nhung la 1 function
    if(typeof fn !== 'function'){
        return null;
    }

    let newArr = [];
    for(let number of numbers){
        if(fn(number)){
            newArr.push(number);
        }
    }
    return newArr;
}
function isOdd(n) {
    return n % 2 !== 0;
}

console.log(myFilter(test, n => n % 5 === 0));// isOdd ten cua ham

// promise
let p = new Promise((res, rej) =>{
    // xu ly cac tien trinh bat dong bo
    setTimeout(() => {
        if(false){
            res({id: 1, name: 'Teo'})
        }
        rej({err: 500});
    }, 500);
});
// cach de lay ket qua tu 1 promise
p.then(data => console.log(data))// nhan ket qua tu res
.catch(err => console.log(err));// nhan ket qua tu rej