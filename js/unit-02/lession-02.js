// goi ham ra su dung
let result = sumNumber(1, 5);
console.log(result);

// function Declarations
function sumNumber(a, b = 2){
    //function : tu khoa khai bao ham (cu phap)
    // sumNumber: ten ham (LTV tu dinh nghia)
    // a, b : tham so (ban chat coi nhu bien, khong bat buoc phai truyen - ko co tu khoa khai bao bien) trong ham su dung nhu la 1 bien
    return a + b;
    // return tra ket qua ve cho ham va dung thuc thi ham
}
// viet ham kiem tra nam nhuan DL
function kiemTraNamNhuanDL(year){
    // kiem tra su hop le cua tham so
    if(year % 400 === 0){
        return true;
    } else if(year % 4 == 0 && year % 100 !==0) {
        return true;
    }
    return false;
}

// viet ham: cho biet tu 1 - 50 co bao nhieu so nguyen to ???
function kiemTraSNT(number){
    if(number <= 1 ){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
function demSoNT(i, j){
    let dem = 0;
    for(let k = i; k<= j; k++){
        if(kiemTraSNT(k)){
            dem += 1;
        }
    }
    return dem;
}
console.log(demSoNT(50, 60));