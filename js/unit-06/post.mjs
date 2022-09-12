import { api } from './services/api.mjs';

function getDetailPost(id){
    api.getDataPostById(id)
    .then(data => {
        api.getDataCommentsByPostId(data.id)
        .then(dt => console.log(dt))
        .catch(e => console.log(e))
    })
    .catch(err => console.log(err))
}
async function getDetailPostV2(id) {
    const detail = await api.getDataPostById(id);
    let comments = [];
    if(detail !== null){
        comments = await api.getDataCommentsByPostId(detail.id);
    }
    return comments;
}

async function getDetailPostV3(id) {
    
}


async function showDataComments(id){
    const comments = await getDetailPostV2(id);
    let tableComment = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Content</th>
                </tr>
            </thead>
            <tbody>
            ${comments.map((item, index) => (`
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.body}</td>
                </tr>
            `) )}
            </body>
        </table>
    `;
    console.log(tableComment);
}
//getDetailPost(1);
//getDetailPostV2(1);
showDataComments(1);