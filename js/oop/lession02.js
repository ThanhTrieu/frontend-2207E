class A {
    // khai bao thuoc tinh bang tu khoa static
    static name = 'Teo';
    static age  = 23;
    email = 'teo@gmail.com';

    static getEmail(){
        console.log(this);
        //const myOb = new A;
        return (new A).email; //myOb.email;
    }

    // khai bao phuong thuc static
    static getName(){
        console.log(this);
        return this.name;
    }
    getAge() {
        console.log(this);
        return A.age;
    }
}
const a = new A;
// truy cap vao thuoc tinh name
// vi thuoc name la static nen ko the dung doi tuong cua class de truy cap vao dc
// dung thang ten class truy cap vao nhung thuoc tinh la static
console.log(A.name);
console.log(a.getAge());