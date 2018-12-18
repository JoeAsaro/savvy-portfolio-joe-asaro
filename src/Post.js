export default function Post(post){
    return `
    <div class="post">
    <h3>${post.id}. ${post.title}</h3>
    <p>${post.body}</p>
    </div>
    `;
}