import { capitalize } from 'lodash';
import { html } from 'lit-html';
function buildLink(link){
    var href = '';
    
    if(link !== 'home'){
        href = link;
    }

    return html`    
          <li>
            <a href="/${href}" data-navigo>
             ${capitalize(link)}
            </a>
          </li>
        `;
}
//handleNav updates the active page to the 
export default function Navagation(state){
    console.log('from nav', state)
    return html`
     <div id="navigation">
        <ul class="container">
            ${state[state.active].links.map(buildLink)}
        <div class="flag">
            <img src="https://vgy.me/17fHhY.png" width="100px">
        </div>
       <div class="sites">
        <a href="https://www.instagram.com/joeyfromamerica"><i class="fab fa-instagram"></i></a>  |
        <a href="https://github.com/joeasaro"><i class="fab fa-github-alt"></i></a>   |
        <a href="https://www.linkedin.com/in/joeasaro"><i class="fab fa-linkedin"></i></a>
       </div>
    </li>
</ul>
</div>
`;
}