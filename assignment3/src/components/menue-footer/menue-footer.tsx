import { Component, h } from '@stencil/core';

@Component({
  tag: 'menue-footer',
  styleUrl: 'menue-footer.css',
  shadow: true,
})
export class Menue {
  
  handleClick(event: UIEvent) {
    
    // var inhalt = document.getElementById('save-button').value;
    alert("Du hast auf Speichern gedrückt");
    console.log(event);
    
  }
  render() {
    return (
        <div class="menue-footer">
          <div class="flex-container">
            <button class="flex-items">Übersicht</button>
            <button class="flex-items">Empfehlungen</button>
            <button class="flex-items">Produktseite</button>
            <button class="flex-items">Produktbewertung</button>
            <button class="flex-items">Outfitvorschläge</button>
          </div>
        </div>
    );
  }
}