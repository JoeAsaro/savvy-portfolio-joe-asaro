import { html } from 'lit-html';
export default function Home(){
    return html`
    <div class="home-container">
        <div class="home-body">
            <div class="home-content">
                <div class="">
                This is the central repository of artwork for Joe Asaro of Saint Louis, Missouri.
                It was created durring the SavvyCoders fall 2018 cohort.
                <h2>I am a SavvyCoder</h2>
                </div>
                <div class="">
                    <p>My art is an exploration in technologies readily available to the artist at this moment.
                    Aggregating and collecting these artifacts of technology and repurposing them for art.</p>
                </div>
            </div>
            <div class="home-img-wrapper">
                <img class="home-img" src="https://imgur.com/a/tnuTtsA"/>
            </div>
        </div>
    </div>
    `;
}