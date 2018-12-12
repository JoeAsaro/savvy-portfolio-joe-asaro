import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';

var router = new Navigo(window.location.origin);

var State = {
    'active': 'home',
    'home': {
        'title': 'hi' ,
        'links': [ 'blog', 'contact', 'projects' ]
    },
    'blog': {
        'title': 'Hello' ,
        'links': [ 'home', 'contact', 'projects' ]
    },
    'contact': {
        'title': 'How you doin',
        'links': [ 'home', 'blog', 'projects' ]
    },
    'projects': {
        'title': 'LOok at me' ,
        'links': [ 'home', 'blog', 'contact' ]
    }
};

var root = document.querySelector('#root');

function handleNavigation(params){
    State.active = params.page;
}
render(State); // eslint-dissable-line
    
function render(state){
    root.innerHTML = `
${Navigation(state)}
${Header(state)}
${Content(state)}
${Footer(state)}
`;

    greet();

    router.updatePageLinks();
}


/* render(State); */

router
    .on('/:page', handleNavigation)
   /*  .on('/', () => handleNavagation({ 'page': 'home' })) */
    .resolve();