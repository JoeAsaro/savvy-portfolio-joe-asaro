/* eslint-disable complexity */
import { html } from 'lit-html';

export default function Modal(state){
    const visible = state.modalVisible
    const post = state.modalContent

    function closeModal(){
        
        state.store.dispatch(() => {
            const posts = state.posts;
           
        
            state.modalContent = null ;
            state.modalVisible = false;
            console.log(state);
            
            return state;
        });
    }
    
    return html`
    <div id="post-modal"  key="${post ? post.id : null}" class='${visible ? 'visible' : ''}'>
    <i class="fas fa-window-close"></i>
    <img class="modal-img"  @click=${closeModal} src="${post ? post.id : true}"/>
    <img class="modal-img" src="${post ? post.imgUrl : null}"/>
    <h3>${post ? post.title : null}</h3>
    <p>${post ? post.medium : null}</p>
    <h2>${post ? post.year : null}</h2>
    <img class="modal-img" src="${post ? post.pngUrl : null}"/>
    
    </div>
    `;
}