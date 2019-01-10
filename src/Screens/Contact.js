import { html } from 'lit-html';
export default function Contact(){
    return html`
    <form action="https://formspree.io/joeyasaro@gmail.com" method="POST">
  <div id="content">	    
    <input type="text" name="firstname" placeholder="First Name" size="50" required>
    <input type="text" name="lastname" placeholder="Last Name" size="50" required>
    <input type="email" name="userEmail" placeholder="your.email@example.com" size="50">
    <input name="superSecurePassword" placeholder="password" size="50" type="password">
    <span>
    <label for="subject">What's this message about?</label>
    <input type="radio" name="subject" value="professional" checked><span>I'd like to hire you!</span>
    <input type="radio" name="subject" value="personal" checked><span>Personal message</span>
    <input type="radio" name="subject" value="other" checked><span>Don't know/something else</span>
    ​
    <input type="checkbox" name="optin" value="trusting" checked>Subscribe me to your newsletter!
    <input type="checkbox" name="optout" value="skeptical" disabled>Cheeky checkbox...
    ​
    <label for="marketing">How did you hear about me?</label>
    <select name="marketing">
      <optgroup label="Online">
        <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
        <option value="github">Online Portfolio (GitHub)</option>
        <option value="search">Search Engine</option>
        <option value="email">Email</option>
      </optgroup>
      <optgroup label="In-Person">
        <option value="networking">We met at a networking event</option>
        <option value="referral">Personal referral</option>
        <option value="random">We met somewhere else</option>
      </optgroup>
      <option value="other">Other</option>
    </select>
    </span>
    ​
    <textarea name="user_message" rows="8" cols="50"></textarea>
    <input type="submit">
  </form>
</div>`
}