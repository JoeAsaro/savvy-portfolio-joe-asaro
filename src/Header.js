export default function Header(state){
    return `
<div id="header">
<h1 class="brand">${state[state.active].title}</h1>
<hr>
</div>
`;
}