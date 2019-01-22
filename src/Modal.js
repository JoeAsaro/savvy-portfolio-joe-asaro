/* eslint-disable complexity */
import { html } from 'lit-html';

export default function Modal(state){
    const visible = state.modalVisible
    const post = state.modalContent
    // set the modal content to null which clears out the content post.
    // then call dispatch to re-rener with a new state.
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
    <div key="${post ? post.id : null}" class='post-modal-wrapper ${visible ? 'visible' : ''}'>
        <div class="post-modal"  key="${post ? post.id : null}">
            <div class="modal-header">
                <span class="modal-title"><h1 >${post ? post.title : null}</h1></span>
                <span class='modal-close'><i @click=${closeModal} class="fas fa-window-close"></i></span>
            </div>
            <div class="modal-body">
                <div class="modal-content">
                    <div class="modal-content-meta">
                        
                            <span>${post ? post.medium : null}</span>
                            <h2 class='inline-block'>${post ? post.year : null}</h2>
                    
                    </div>
                    <div class="modal-content-description">
                        <p>${post ? post.description : null}</p>
                    </div>
                    <div class='modal-video-wrapper'>
                        <iframe class="modal-video" src="${post ? post.videoLink : null}" 
                            width="100%" 
                            frameborder="0" 
                            webkitallowfullscreen 
                            mozallowfullscreen 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div class="modal-img-wrapper">
                    <img class="modal-img" src="${post ? post.imgUrl : null}"/>
                </div>
            </div>
        </div>
    </div>
    `;
}
