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
          <stencil-route-link url='/uebersicht'>
              <button class="flex-items">Übersicht</button>
            </stencil-route-link>
            <stencil-route-link url='/empfehlungen'>
              <button class="flex-items">Empfehlungen</button>
            </stencil-route-link>
            <stencil-route-link url='/produktseite'>
              <button class="flex-items">Produktseite</button>
            </stencil-route-link>
            <stencil-route-link url='/produktbewertung'>
              <button class="flex-items">Produktbewertung</button>
            </stencil-route-link>
            <stencil-route-link url='/outfitvorschlaege'>
              <button class="flex-items">Outfitvorschläge</button>
            </stencil-route-link>
            
          </div>
        </div>
    );
  }
}