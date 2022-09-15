class A {
    name = 'Teo';
    constructor(age){
        console.log(`nam nay toi ${age} tuoi - class A`);
    }
    getName(){
        return this.name;
    }
}
class B extends A {
    // ke thua
    myName= 'Ty';

    constructor(age){
        
        console.log(`nam nay toi ${age} tuoi - class B`);
        super();
    }

    // override
    getName(){
        return this.myName;
    }

    getFullName(){
        //return this.getName();
        return super.getName();
    }
}
const b = new B(18);
//console.log(b.name);
//console.log(b.getName());
console.log(b.getFullName());