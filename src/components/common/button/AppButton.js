import { LitElement, html } from 'lit-element'
import styles from './_appButton.scss'

class AppButton extends LitElement {
  static get properties() {
    btnType: { type: String },
    btnRaised: { type: String }
  }

  render() {
    return html `
      <style>${styles.toString()}</style>
      <button class="${styles.locals['primary']} ${styles.locals['primary-raised']}">
        <span class="${styles.locals['app-button-label']}">teste</span>
      </button>
    `
  }
}

customElements.define('app-button', AppButton)