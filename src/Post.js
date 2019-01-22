import { html } from 'lit-html';


export default function Post(post, state){
    // handleModal is the event handler for post when a post is clicked we set the found post to state
    // then call dispatch to re-render application as is required by lit-html.
    // modal is not visable by default a click will set the visability state of modal to true.
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
    // takes a single post and map to the display with template literals
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