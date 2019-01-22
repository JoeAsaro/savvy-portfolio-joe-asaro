import { html } from 'lit-html';
export default function Contact(){
    return html` 
    <div class="contact-wrapper">
    
    <h3> If you have any questions,</h3> want to contact me for empoyment or spot a bug in my site <strong>(this site is a work inprogress)</strong> send me an email! 
      <form action="https://formspree.io/joeyasaro@gmail.com" method="POST">
        <input type="text" placeholder="Your name">
        <input type="email" placeholder="Your email">
        <textarea placeholder="Your message"></textarea>
        <input type="submit" value="Send">
      </form>
      <img src="https://vgy.me/2KTXP4.png" alt="" width="200">
      </div>
`;
}