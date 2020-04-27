import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-uebersicht',
  styleUrl: 'app-uebersicht.css',
  shadow: true
})
export class AppUebersicht {
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
        <h2>Übersicht</h2>
        <div class="inhalt flex-container">
          <produkt-vorschau benennung="Tshirt" kurztext="Kurztext" bild="/assets/tshirt.jpg"></produkt-vorschau>
          <produkt-vorschau benennung="Kleid" kurztext="Kurztext" bild="/assets/kleid.jpg"></produkt-vorschau>
          <produkt-vorschau benennung="Schuhe" kurztext="Kurztext" bild="/assets/schuhe.jpg"></produkt-vorschau>
        </div>
        
        <menue-footer></menue-footer>        
      </div>
      
    );
  }
}