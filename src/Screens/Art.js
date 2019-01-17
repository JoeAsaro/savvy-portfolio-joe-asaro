import Post from '../Post';
import Modal from '../Modal';
import { html } from 'lit-html';

export default function Art(state){
    return html`
        ${state.posts.map(post => Post(post, state))}
        `;
}