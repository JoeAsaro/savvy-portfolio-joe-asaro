import { html } from 'lit-html';
import Modal from './Modal';


export default function Post(post, posts){
    function handleModal(e){
        const modal = document.getElementById('post-modal');

        console.log(modal);

        const updatedModal = Modal(posts.find((p) => p.id === post.id)).getHTML();

        modal.outerHTML = updatedModal;
        modal.classList.add('visible');
    }
    
    return html`
    <div class="post" value="${post.id}" @click=${handleModal}>
    <h3>${post.title}</h3> 
    <div class="spec">
    <p>${post.medium}</p>
    <h2>${post.year}</h2>
    </div>
    <img src="${post.pngUrl}">
    </div>
    `;
}