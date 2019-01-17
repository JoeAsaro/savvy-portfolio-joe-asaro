import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';
import Store from './src/Store';
import { html, render } from 'lit-html';
import Modal from './src/Modal';


var router = new Navigo(window.location.origin);
var root = document.querySelector('#root');

var State = {
    'posts': [],
    
    'modalVisible': false,
    'modalContent': null,
    'active': 'home',
    'home': {
        'title': 'JOEASARO.COM' ,
        'links': [ 'art', 'contact', 'bio' ]
    },
    'art': {
        'title': 'ART' ,
        'links': [ 'home', 'contact', 'bio' ]
    },
    'contact': {
        'title': 'KEEP IN TOUCH',
        'links': [ 'home', 'art', 'bio' ]
    },
    'bio': {
        'title': 'BIO' ,
        'links': [ 'home', 'art', 'contact' ]
    }
};
var store = new Store(State);

State.store = store;


function handleNavigation(params){
    store.dispatch((state) => {
        state.active = params.page;
        
        return state;
    });
}

function App(state){
    console.log('from app', state);
    
return html`
        ${Modal(state)}
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


router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .on('/art', () => handleNavigation({ 'page': 'art' }))
    .on('/bio', () => handleNavigation({ 'page': 'bio' }))
    .resolve();

router.updatePageLinks();

fetch('https://api.myjson.com/bins/adi9c')
    .then((response) => response.json())
    .then((art) => store.dispatch((state) => {
        state.posts = art;

        return state;
    }));


