import { html } from 'lit-html';
class Store{
    constructor(state){
        this.listeners = [];
        this.state = state;
    }

    dispatch(reducer){
        this.state = reducer(this.state);
        this.listeners.forEach(
            (listener) => listener(this.state)
       
        );
    }
    addListener(listener){
        console.log('listener added');
        this.listeners.push(listener);
    }
}
export default Store;

