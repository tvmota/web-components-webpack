import { LitElement, html } from 'lit-element'

class PageNotFound extends LitElement {
  render () {
    return html `
      <div part="wrapper">
        <h2 part="title">404</h2>
        <h2 part="title">Not Found</h2>
      </div>
    `
  }
}

export default PageNotFound