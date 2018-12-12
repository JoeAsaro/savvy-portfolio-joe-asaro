import { capitalize } from 'lodash';
function buildLinks(links){
    var list = '';
    var link = '';

    for(let i = 0; i < links.length; i++){
        if(links[i] !== 'home'){
            link = links[i];
        }

        list += `    
          <li>
            <a href="/${links[i]}" data-navigo>${capitalize(links[i])}</a>
          </li>
        `;
    }
    // eslint-disable-next-line indent
/* console.log(list); */

    return list;
}
export default function Navagation(state){
    return `
     <div id="navigation">
        <ul class="container">
            ${buildLinks(state[state.active].links)}
        <ul class="dropdown">
            <li>⛓⛓⛓⛓</li>
            <li>🐀🐁🐀🐐</li>
            <li>⛓⛓⛓⛓⛓</li>
        </ul>
    </li>
</ul>
</div>
`;
}