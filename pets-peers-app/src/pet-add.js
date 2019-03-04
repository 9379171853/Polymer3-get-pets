

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';


class PetAdd extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div>
      <p>Add Pet </p>
      </div>
    `;
  }
}

window.customElements.define('pet-add', PetAdd);
