import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'start-design',
  styleUrl: 'start-design.css',
  shadow: true,
})
export class Start {
  @Prop() benennung: string;
  
  handleClick(event: UIEvent) {
    
    // var inhalt = document.getElementById('save-button').value;
    alert("Du hast auf Speichern gedrückt");
    console.log(event);
    
  }
  render() {
    return (
        <div class="start-design">
          <h1 class="ueberschrift">{this.benennung}</h1>
        
        </div>
    );
  }
}