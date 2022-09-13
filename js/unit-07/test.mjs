// khi 1 module(file) nao do export default 1 doi tuong thi ben module(file) ma import co the tuy y dat lai ten cho doi tuong do va khong import object voi doi tuong do
import tongHaiSo from './lession01.mjs';
//import {sumNumber} from './lession01.'; // ko can lam vay

// no ko export default nen can import duoi dang object
// luu y: luon luon phai import lai dung ten ma no da export
import { kiemTraChanLe } from './lession01.mjs';

console.log(kiemTraChanLe(9));
const result = tongHaiSo(1,3);
console.log(result);