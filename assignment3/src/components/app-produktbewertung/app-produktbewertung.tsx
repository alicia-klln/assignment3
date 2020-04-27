import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-produktbewertung',
  styleUrl: 'app-produktbewertung.css',
  shadow: true
})
export class AppProduktbewertung {
  @Prop() test: string;
  
  handleClick(event: UIEvent) {
    
    // var inhalt = document.getElementById('save-button').value;
    alert("Deine Bewertung wird nun gespeichert");
    console.log(event);
  }

  render() {
    return (
      <div class='app-home'>
        <stencil-route-link url='/'>
           <img id="kleinesLogo" src="/assets/logo.png"></img>   
        </stencil-route-link>
        <div class="inhalt">
        <h2>Produktbewertung</h2>
        
        </div>
        <menue-footer></menue-footer>        
      </div>
      
    );
  }
}