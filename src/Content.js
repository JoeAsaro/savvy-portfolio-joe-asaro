import { capitalize } from 'lodash';
import * as Screens from './Screens';

console.log(Screens)



export default function Content(state){
    return `
        <div id="content">
            <div class="container">
             ${Screens[capitalize(state.active)]()}
            </div>
        </div>
    `;
}