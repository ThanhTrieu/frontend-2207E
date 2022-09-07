// cac kien thuc tiep tuc ve array va object
const {a, b} = {a: 10, b: 20}; // destructuring
console.log(a, b);
const ob = {u:100, y:20};
const test = {...ob, u: 20, v: 30}; //
console.log(test, ob);
const n = [1,2,3];
const m = [...n, 4,5,6];
console.log(m, n);

const listStudent = [
    {id: 113, name: 'Teo', age: 20, address: 'HN', money: 100},
    {id: 114, name: 'Ty', age: 21, address: 'HD', money: 200},
    {id: 115, name: 'Hoi', age: 22, address: 'ND', money: 300}
];
listStudent.forEach(function(item) {
    console.log(item.id);
    console.log(item['id']);
});
for(let i = 0; i < listStudent.length; i++) {
    console.log(listStudent[i]['id']);
    console.log(listStudent[i].id);
}
// su dung map - lay ra toan bo tuoi cua cac ban sv
const age = listStudent.map(item => item.age).reduce((p,n) => p + n);
console.log(age);

const result = listStudent.filter(item => item.money >= 200);
console.log(result);
let tableStudent = `
    <table>
        <thead>
            <tr>
                <td>MSV</td>
                <td>Ho ten</td>
                <td>Tuoi</td>
                <td>Dia chi</td>
                <td>Hoc bong</td>
            </tr>
        </thead>
        <tbody>
        ${result.map((item, index) => (`
            <tr key="${index}">
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.address}</td>
                <td>${item.money}</td>
            </tr>
        `) )}
        </tbody>
    </table>
`;
console.log(tableStudent);