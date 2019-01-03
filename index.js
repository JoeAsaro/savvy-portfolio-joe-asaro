import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';

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

class Store{
    constructor(state){
        this.listener = () => {};
        this.state = state;
    }

    dispach(reducer){
        this.state = reducer(this.state);
        
        this.listener(this.state);
        render(this.state); // eslint-disable-line
    }
    addListener(listener){
        this.listener = listener;
    }
}

var store = new Store(State); // eslint-disable-line

function handleNavigation(params){
    store.dispach((state) => {
        state.active = params.page;

        return state;
    });
    render(State); // eslint-disable-line
}
    
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

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();

fetch('http://localhost:3004/art')
    .then((response) => response.json())
    .then((art) => {
        State.posts = art;

        render(State);
    });

