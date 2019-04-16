import { LitElement, html } from 'lit-element'

class TesteElement extends LitElement {
  static get properties () {
    return {
      prop1: { type: String }
    }
  }

  constructor () {
    super()
    this.prop1 = ''
  }

  render () {
    return html `
      <button @click="${this.handleClick}">Teste</button>
    `
  }

  updated (changeProps) {
    changeProps.forEach((oldVal, propName) => {
      console.log(`${propName}:${this.prop1}`)
    })
  }

  handleClick (evt) {
    console.log(evt)
    console.log(this.prop1)
  }
}

export default TesteElement
