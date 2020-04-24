import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <div class="inhalt">
          <div class="flex-container">
            <div id="logo"></div>
            <h1>Shopping</h1>
            <stencil-route-link url='/uebersicht'>
              <button class="flex-items">
                Loslegen
              </button>
            </stencil-route-link>
          </div>
        </div>
        <div class="flex-container">
          <menue-footer></menue-footer>
        </div>
        
      </div>
    );
  }
}