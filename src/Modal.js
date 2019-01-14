/* eslint-disable complexity */
import { html } from 'lit-html';

export default function Modal(post){
    return html`
    <div id="post-modal"  key="${post ? post.key : null}">
    <img src="${post ? post.id : true}"/>
    <img src="${post ? post.imgUrl : null}"/>
    <h3>${post ? post.title : null}</h3>
    <p>${post ? post.medium : null}</p>
    <h2>${post ? post.year : null}</h2>
    <img src="${post ? post.pngUrl : null}"/>
    </div>
    `;
}