import { LitElement, html } from 'lit-element'
import styles from './_pageNotFound.scss'

class PageNotFound extends LitElement {
  render () {
    return html `
      <style>${styles.toString()}</style>
      <div class="${styles.locals['content']}">
        <h2 class="${styles.locals['content-title']}">404</h2>
        <h2 class="${styles.locals['content-title']}">Not Found</h2>
      </div>
    `
  }
}

export default PageNotFound