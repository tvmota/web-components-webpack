import { LitElement, html } from 'lit-element'
import styles from './_appHeader.styl'

class AppHeader extends LitElement {
  render() {
    return html `
      <style>${styles.toString()}</style>
      <header class="${styles.locals['app-header']}">
        <h2 class="title-header">Header</h2>
      </header>
    `
  }
}

customElements.define('app-header', AppHeader)