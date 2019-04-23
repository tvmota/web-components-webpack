import { LitElement, html } from 'lit-element'
import '../../components/common/header/AppHeader.js'
import '../../components/common/footer/AppFooter.js'
import '../../components/common/button/AppButton.js'

class AppMain extends LitElement {
  render () {
    return html `
      <style>
        .main-container {
          display:flex;
          flex-direction: column;
          height: 100vh;
        }

        .main-content {
          display: flex;
          flex-direction: column;
          flex: 1 0 auto;
          padding: 1.5rem 1.5rem 0;
          width: calc(100% - 3rem);
        }

        .main-content::after {
          content: '';
          display: block;
          margin-top: 1.5rem;
          height: 0;
          visibility: hidden;
        }
      </style>
      <div class="main-container" part="container">
        <app-header></app-header>
        <main class="main-content" part="content">
          <app-button></app-button>
        </main>
        <app-footer></app-footer>
      </div>
    `
  }
}

export default AppMain