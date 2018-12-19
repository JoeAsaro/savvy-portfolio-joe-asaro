import { capitalize } from 'lodash';
function buildLink(link){
    var href = '';
    
    if(link !== 'home'){
        href = link;
    }

    return `    
          <li>
            <a href="/${href}" data-navigo>
             ${capitalize(link)}
            </a>
          </li>
        `;
}

export default function Navagation(state){
    return `
     <div id="navigation">
        <ul class="container">
            ${state[state.active].links.map(buildLink).join('')}
        <ul class="dropdown">
            <li>⛓⛓⛓⛓</li>
            <li>🐀🐁🐀🐐</li>
            <li>⛓⛓⛓⛓⛓</li>
        </ul>
       
        <li><a href="https://www.instagram.com/joeyfromamerica/"><i class="fab fa-instagram"></i>instagram</a></li>
        <li><a href="https://github.com/joeasaro"><i class="fab fa-github-alt"></i>GitHub</a></li>
        <li><a href="www.linkedin.com/in/joeasaro"><i class="fab fa-linkedin"></i>Linkedin</a></li>
    </li>
</ul>
</div>
`;
}