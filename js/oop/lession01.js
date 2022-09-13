// class trong js
class Animals {
    constructor(p){
        console.log('Toi la phuong thuc chay dau tien khi khoi tao doi  tuong thuoc class');
        console.log(p);
    }
    // dinh nghia thuoc tinh cua doi tuong thuoc class
    // mieu ta dac diem tinh chat cua doi tuong thuoc class (dung danh tu hay tinh tu dinh nghia - co the hieu ngam la bien) ==> Thuoc tinh
    name   = 'Tom'; // pham vi truy cap : public
    color  = 'white';
    weight = 2;
    // ko su dung cac tu khoa nhu : let - var -const
    #money = 1000; // pham vi truy cap:  private
    _gender = 'male'; // pham vi truy cap protected

    // dinh nghia phuong thuc trong class
    // hanh dong cua doi tuong (dung dong tu mieu ta - co the hieu ngam la cac function) ==> method
    #eat(){
        console.log(this._gender);
        return 'fish';
    }
    sleeping = () => {
        console.log(this.#money);
        return `${this.#eat()}  - 23h:00`;
    }

}
// object trong js
let cat = new Animals('Meo'); // tham so dc constructor nhan
let dog = new Animals('Cho');
// truy cap vao thuoc tinh o ben ngoai class
// ten cua doi tuong truy cap vao
console.log(cat.name);
//console.log(dog.#money); // sai vi la private
console.log(cat.gender);