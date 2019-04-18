import { LitElement, html } from 'lit-element'
import { SVGTemplateResult } from 'lit-html';
import styles from './_appHeader.scss'
import movieIcon from '../../../assets/images/icons/movie-tickets.svg'

class AppHeader extends LitElement {
  render() {
    console.log()
    return html `
      <style>${styles.toString()}</style>
      <header class="${styles.locals['app-header']}">
        <h2 class="title-header">Movie DB</h2>
      </header>
    `
  }
}

customElements.define('app-header', AppHeader)