import Content from './src/Content';
import Footer from './src/Footer';
import Navigation from './src/Navigation';
import Header from './src/Header';

document.querySelector('#root').innerHTML = `
    ${Navigation}
    ${Header}
    ${Content}
    ${Footer}
`;

// var userName = prompt('What is your name?') || 'Anonymous User';

// var title = document.querySelector('h1');

// var greet = function greet(){
//    if(!userName){
//        userName = prompt('Whats is your name, for real this time?');
//
//        greet();
//    }
// else{
//        title.textContent = '💾 ' + userName + ' 🐀';
//    }
//  };

// greet();