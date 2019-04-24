import { LitElement, html } from 'lit-element'
import styles from './_appButton.scss'

class AppButton extends LitElement {
  static get properties() {
    return {
      btnType: { type: String },
      btnVariant: { type: String },
      btnLabel: { type: String }
    }
  }

  constructor() {
    super()
    this.btnType = 'button'
    this.btnStyle = 'primary'
    this.btnVariant = 'primary-raised'
    this.btnLabel = 'button'
    this.btnTitle = `button${Math.floor(Math.random() * 100)}`
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('btn-click', {detail: 'botao click'}))
  }

  render() {
    return html `
      <style>${styles.toString()}</style>
      <button
        @click="${this.handleClick}"
        class="${styles.locals[this.btnStyle]} ${styles.locals[this.btnStyle + '-' + this.btnVariant]}" 
        title="${this.btnTitle}" 
        type="${this.btnType}">
          <span class="${styles.locals['mdc-button__label']}">${this.btnLabel}</span>
      </button>
    `
  }
}

customElements.define('app-button', AppButton)
