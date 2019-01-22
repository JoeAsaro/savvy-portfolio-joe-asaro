import { capitalize } from 'lodash';
import { html } from 'lit-html';
import * as Screens from './Screens';

export default function Content(state){
    return html`
        <div id="content">
            <div class="container ${state.active ? 'post-container' : ''}">
             ${Screens[capitalize(state.active)](state)}
            </div>
        </div>
    `;
}