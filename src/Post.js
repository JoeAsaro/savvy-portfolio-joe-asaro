import { html } from 'lit-html';
// import Store from './Store';


export default function Post(post, state){
    function handleModal(){
        
        state.store.dispatch(() => {
            const posts = state.posts;
            const found = posts.find((p) => p.id === post.id);
        
            state.modalContent = found;
            state.modalVisible = true;
            console.log(state);
            
            return state;
        });
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