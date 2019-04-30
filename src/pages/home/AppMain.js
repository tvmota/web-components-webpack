import { LitElement, html } from 'lit-element'
import '../../components/common/header/AppHeader.js'
import '../../components/common/footer/AppFooter.js'
import '../../components/common/button/AppButton.js'

//Redux
import { Store } from '../../store'
import { updateShows } from '../../actions'

//Api
import { listMovies } from '../../services/MovieService'

import styles from '../../assets/css/_modules/_container.scss'

class AppMain extends LitElement {
  btnClick(evt) {
    console.log(evt)
  }

  firstUpdated() {
    Store.dispatch(updateShows([]))
    listMovies()
      .then(resp => {
        Store.dispatch(updateShows(resp.results))
      }).catch(err => console.error(err))
  }

  render () {
    Store.subscribe(() => console.log(Store.getState()))
    //<!--app-button @btn-click="${this.btnClick}" btnStyle="secondary" btnVariant="outline" btnLabel="Teste1"></app-button-->
    return html `
      <style>${styles.toString()}</style>
      <div class="${styles.locals['main-container']}">
        <app-header></app-header>
        <main class="${styles.locals['main-container-content']}">
          <div class="${styles.locals['mdc-layout-grid']}">
            <div class="${styles.locals['mdc-layout-grid__inner']}">
              <div class="${styles.locals['mdc-layout-grid__cell--span-12']}">1</div>
              <div class="${styles.locals['mdc-layout-grid__cell']}">2</div>
              <div class="${styles.locals['mdc-layout-grid__cell']}">3</div>
            </div>
          </div>
        </main>
        <app-footer></app-footer>
      </div>
    `
  }
}

export default AppMain