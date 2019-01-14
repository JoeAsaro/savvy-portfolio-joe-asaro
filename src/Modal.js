import { html } from 'lit-html';
export default function Modal(post){
    return html`
    <div id="post-modal"  key="${post ? post.key : null}">
    <img src="${post ? post.id : null}"/></div>
    `;
}