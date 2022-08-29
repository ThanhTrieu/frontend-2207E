// function expression

let sumNumber = function(a, b){
    return a + b;
}
let result = sumNumber(1,2);
console.log(result);

let sumNumberV2 = (a, b) => {
    return a + b;
} 
let res2 = sumNumberV2(3,2);
console.log(res2);

let kiemTraChanLe = n => n%2 === 0;
console.log(kiemTraChanLe(13));

function tinhDienTichHinhThang(a,b,h){
    // tinh tong 2 day
    function tongHaiDay(){
        return a + b;
    }

    function phepNhanChieuCao(){
        return tongHaiDay()*h;
    }

    function tinhDienTich(){
        return phepNhanChieuCao()/2;
    }
    //return tinhDienTich();// tra ve ket qua
    return tinhDienTich;// tra ve 1 ham thuc thi
}
let f = tinhDienTichHinhThang(2,3,2);
console.log(f());

//
let kiemTraCP = n => {
    if( n <= 1){
        return false;
    }
    let sqrtValue = Math.sqrt(n);
    // kiem tra sqrtValue co phai la so nguyen ko?
    // neu no la so nguyen thi n la so chinh phuong
    return Number.isInteger(sqrtValue);
}

let hienKetQua = function(i, j){
    let res = '';
    for(let v = i; v <= j; v++){
        if(kiemTraCP(v)){
            res += res === '' ? v : ','+v;
        }
    }
    return res;
}
console.log(hienKetQua(1,50));

function checkingNumberString(n){
    n = n.trim();// xoa khoang trang 2 dau cua chuoi
    if(!isNaN(n) && n.length > 0){
        return true;
    }
    return false;
}
console.log(checkingNumberString(''));
let table = `
    <table></table>
`;

let myStr = 'Hom nay';
let resStr = myStr.concat(' hoc js');
myStr += ' hoc js';
console.log(myStr, resStr);
//myStr.slice(1,1);
///////////////////////
let fb = 'cuoi tuan se co bong da nha';

//let fb1 = fb.slice(3,-7);
//let fb2 = fb.substring(3, -7);
console.log(fb2);

let myFindString = (str, character) => {
    let pos = str.indexOf(character);
    if(pos === -1){
        // ko thay
        return string.substr(0, str.length/2);
    } else {
        // co thay
        return str.slice(pos, str.length);
    }
}
console.log(myFindString(fb,'tuan'));