// generator function
// chi duoc dung function Declarations de dinh nghia
// cu phap function* nameFunction(){}
// tu khoa yield di kem su dung voi generator function(chung ta ngam hieu no giong nhu tu khoa await trong async ... await)
// tu khoa tuong tu nhu return : dung ham va tra ket qua - no con co the quay lai de tiep tuc thuc thi ham o mot thoi diem khac

function* demo(){
    let i = 0;
    while(i < 3){
        yield i++;
    }
}
let result = demo();
console.log(result.next().value);
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());