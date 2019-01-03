export default function Post(post){
    return `
    <div class="post">
    <h3>${post.title}</h3> 
    <div class="spec">
    <p>${post.medium}</p>
    <h2>${post.year}</h2>
    </div>
    <img src="${post.pngUrl}">
    </div>
    `;
}