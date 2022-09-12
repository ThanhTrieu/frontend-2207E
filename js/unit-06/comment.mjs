import {api} from './services/api.mjs';

const buildDataPost = async () => {
    const posts    = await api.getAllDataPosts();
    const comments = await api.getAllDataComments();
    let results = [];
    posts.forEach((p,i) => {
        comments.forEach((c,j) => {
            if(p.id == c.postId){
                results.push(p,{comments: [c]})
            }
        })
    })
    return results;
}
console.log(buildDataPost().then(dt => console.log( JSON.stringify(dt))));