import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';
import Store from './src/Store';
import { html, render } from 'lit-html';


var router = new Navigo(window.location.origin);
var root = document.querySelector('#root');

var State = {
    'posts': [],
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

var store = new Store(State);


function handleNavigation(params){
    store.dispatch((state) => {
        state.active = params.page;
    
        return state;
    });
}

function App(state){
    return html`
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
    `;
}

function start(state){
    render(App(state), root);
}

store.addListener(start);
store.addListener(() => router.updatePageLinks());

// function render(state){
//     root.innerHTML = `
//         ${Navigation(state)}
//         ${Header(state)}
//         ${Content(state)}
//         ${Footer(state)}
// `;

//     greet();

//     router.updatePageLinks();
// }

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();

router.updatePageLinks();

fetch('https://68.183.113.11/art')
    .then((response) => response.json())
    .then((art) => store.dispatch((state) => {
        state.posts = art;

        return state;
    }));
