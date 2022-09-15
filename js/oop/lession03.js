// giai quyet bai toan: giai ptbh 2 voi cach xu ly bang oop js

class GiaiPTBH {
    x = null;
    y = null;
    z = null;
    constructor(a,b,c){
        this.x = a;
        this.y = b;
        this.z = c;
    }
    #tinhDelta(){
        return (this.y*this.y)-(4*this.x*this.z);
    }
    #timNghiem(){
        let delta = this.#tinhDelta();
        let x1 = null;
        let x2 = null;
        if(delta === 0){
            x1 = x2 = -(this.y)/(2*this.x);
        } else if(delta > 0){
            x1 = (-(this.y)+Math.sqrt(delta))/(2*this.x);
            x2 = (-(this.y)-Math.sqrt(delta))/(2*this.x);;
        } else {
            x1 = x2 = 0;
        }
        return [x1,x2];
    }
    showResult(){
        return this.#timNghiem();
    }
}
const pt = new GiaiPTBH(1,2,3);