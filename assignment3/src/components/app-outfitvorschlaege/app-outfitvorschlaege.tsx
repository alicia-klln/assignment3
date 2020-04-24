import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-outfitvorschlaege',
  styleUrl: 'app-outfitvorschlaege.css',
  shadow: true
})
export class AppOutfitvorschläge {
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
        <h2>Outfitvorschläge</h2>
        
        </div>
        <menue-footer></menue-footer>        
      </div>
      
    );
  }
}