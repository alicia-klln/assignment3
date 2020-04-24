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
        <div class="inhalt">
        <h2>Übersicht</h2>
        <produkt-vorschau></produkt-vorschau>
        </div>
        <menue-footer></menue-footer>        
      </div>
      
    );
  }
}