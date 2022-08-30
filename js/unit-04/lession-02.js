// object
let car = {}; // object rong
// bo sung thuoc tinh
car.name = 'BMW';
// name : thuoc tinh (key cua object - truy cap vao gia tri thuoc tinh)
// BMW : gia tri cua thuoc tinh
// bo sung them phuong thuc
car.start = function(){
    return 'OK';
}
console.log(car.name, car['name']); // truy cap vao thuoc tinh
console.log(car.start()); // truy cap vao phuong thuc va thuc thi

const persons = {
    name: 'Teo',
    age: 20,
    learning: function(){
        return 'JS'
    },
    sleeping: function(){
        return '00h00';
    }
};
// person = 'teo@gmail.com'; // sai
persons.email = 'teo@gmail.com'; // ok