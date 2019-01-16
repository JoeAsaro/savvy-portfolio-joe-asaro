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
    <div key="${post ? post.id : null}" class='post-modal-wrapper ${visible ? 'visible' : ''}'>
        <div class="post-modal"  key="${post ? post.id : null}">
            <div class="modal-close">
                <i @click=${closeModal} class="fas fa-window-close"></i>
            </div>
            <div class="modal-body">
                <div class="modal-content">
                    <div class="modal-content-meta">
                        <h1 class="brand">${post ? post.title : null}</h1>
                        <p>${post ? post.medium : null}</p>
                        <h2>${post ? post.year : null}</h2>
                    </div>
                    <div class="modal-content-description">
                        <p>My art is an exploration in technologies readily available to the artist at this moment.
                        Aggregating and collecting these artifacts of technology and repurposing them for art.

                        The juxtaposition of technology and rough construction materials, references an alchemy of
                        sorts. Transforming waste into a portal for new ideas. A portal that gives a glimpse into the
                        mind of the artist.</p>
                    </div>
                        <iframe class="modal-video" src="https://player.vimeo.com/video/267478478" 
                            width="100%" 
                            frameborder="0" 
                            webkitallowfullscreen 
                            mozallowfullscreen 
                            allowfullscreen>
                        </iframe>
                </div>
                <div class="modal-img">
                    <img class="modal-img" src="${post ? post.imgUrl : null}"/>
                </div>
            </div>
        </div>
    </div>
    `;
}