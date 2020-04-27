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
            <div>
              <img id="logo" src="/assets/logo.png"></img>
            </div>
            <h1>Shopping</h1>
            <stencil-route-link url='/uebersicht'>
              <button>
                Loslegen
              </button>
            </stencil-route-link>
          </div>
        </div>
          <menue-footer></menue-footer>        
      </div>
    );
  }
}