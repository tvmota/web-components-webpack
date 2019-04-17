import { LitElement, html } from 'lit-element'
import styles from './_appFooter.scss'

class AppFooter extends LitElement {
  render() {
    return html `
      <style>${styles.toString()}</style>
      <footer class="${styles.locals['app-footer']}" role="contentinfo">
        <span>@Author</span>
      </footer>
    `
  }
}

customElements.define('app-footer', AppFooter)