import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'produkt-vorschau',
  styleUrl: 'produkt-vorschau.css',
  shadow: true,
})
export class Produktvorschau {
  @Prop() benennung: string;
  @Prop() kurztext: string;
  @Prop() bild: string;
  
  handleClick(event: UIEvent) {
    
    // var inhalt = document.getElementById('save-button').value;
    alert("Du hast auf Speichern gedrückt");
    console.log(event);

  }
  render() {
    return (
        <div class="produkt-vorschau">
          <div class="arrow-left"></div>
          <div class="arrow-right"></div>

          <div class="inhalt">
            <div class="inneres">
              <h1 id="ueberschrift">{this.benennung}</h1>
              <img id="produktbild" src={this.bild}></img>
              <h4>{this.kurztext}</h4>
            </div>
            <button id="mehrErfahren">Mehr erfahren</button>
          </div>
        </div>
        

    );
  }
}