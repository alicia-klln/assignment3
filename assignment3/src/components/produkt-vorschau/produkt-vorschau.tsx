import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'produkt-vorschau',
  styleUrl: 'produkt-vorschau.css',
  shadow: true,
})
export class Produktvorschau {
  @Prop() benennung: string;
  
  handleClick(event: UIEvent) {
    
    // var inhalt = document.getElementById('save-button').value;
    alert("Du hast auf Speichern gedrückt");
    console.log(event);

  }
  render() {
    return (
        <div class="produkt-vorschau">
          <h1 class="ueberschrift">{this.benennung}</h1>
        
        </div>
    );
  }
}