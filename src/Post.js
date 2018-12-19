export default function Post(post){
    return `
    <div class="post">
    <h3>${post.title}</h3>
    <img src="${post.url}" width="150px">
    </div>
    `;
}