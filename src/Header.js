export default function Header(state){
    return `
<div id="header">
<h1 class="brand">${state.title}</h1>
<hr>
</div>
`;
}