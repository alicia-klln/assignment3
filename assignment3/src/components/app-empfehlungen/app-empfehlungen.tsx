import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-empfehlungen',
  styleUrl: 'app-empfehlungen.css',
  shadow: true
})
export class AppEmpfehlungen {
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
        <h2>Empfehlungen</h2>
        <produkt-vorschau></produkt-vorschau>
        </div>
        <menue-footer></menue-footer>        
      </div>
      
    );
  }
}