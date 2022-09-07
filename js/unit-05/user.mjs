import { api } from './services/api.mjs';

function showDataUser(){
    api.getAllUsers()
    .then(result => {
        if(result.status === 200){
            console.log(result.data);
        } else {
            console.log({code: 404, message: 'Not Found'});
        }
        
    })
    .catch(err => console.error(err));
}
showDataUser();
const post = {id: 1, title: 'abc'};
const comments = [
    {id: 1, post_id: 1, content: 'dassda'},
    {id: 2, post_id: 2, content: 'dassda'},
    {id: 3, post_id: 1, content: 'dassda'}
];