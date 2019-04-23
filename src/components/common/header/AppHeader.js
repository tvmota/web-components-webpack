import { LitElement, html } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import styles from './_appHeader.scss'
import movieIcon from '../../../assets/images/icons/movie-tickets.svg'

class AppHeader extends LitElement {
  render() {
    return html `
      <style>${styles.toString()}</style>
      <header class="${styles.locals['app-header']}">
        <i class="${styles.locals['app-header-icone']}">${unsafeHTML(movieIcon)}</i>
        <h2 class="${styles.locals['app-header-title']}">Movie DB</h2>
      </header>
    `
  }
}

customElements.define('app-header', AppHeader)