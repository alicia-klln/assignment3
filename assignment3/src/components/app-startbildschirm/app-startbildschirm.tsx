import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-startbildschirm',
  styleUrl: 'app-startbildschirm.css',
  shadow: true
})
export class AppHome {
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
        <h2>Auswertung</h2>
        <start-design benennung="Überschrift"></start-design>
        </div>
        <menue-footer></menue-footer>        
      </div>
      
    );
  }
}