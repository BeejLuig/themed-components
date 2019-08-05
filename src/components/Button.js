// Import the LitElement base class and html helper function
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import theme, { locals as styles } from 'theme';

// Extend the LitElement base class
export default class Button extends LitElement {

  static get styles() {
    return [css`
      :host {
        display: block;
      }`, css`${unsafeCSS(theme.toString())}`];
  } 

  render() {
    return html`
      <button class=${styles.button}>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('my-button', Button);