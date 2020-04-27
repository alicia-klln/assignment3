import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-produktseite',
  styleUrl: 'app-produktseite.css',
  shadow: true
})
export class AppProduktseite {
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
        <h2>Produktseite</h2>
        </div>
        <menue-footer></menue-footer>        
      </div>
      
    );
  }
}