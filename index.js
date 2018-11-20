var userName = prompt('What is your name?');

var greet = function greet() {
    if (!userName) {
        userName = prompt('Whats is your name, for real this time?')

        greet();
    } else {
        alert('Hello ' + userName);
    }
};

greet();