/*import OneDialog from './components/OneDialog.js'
import TesteElement from './components/MyElement'
import './assets/styles.scss'*/

//document.getElementById('msg').innerText = `The square of 2 is ${square(2)}`;

/*customElements.define('one-dialog', OneDialog)
customElements.define('teste-element', TesteElement)
const button = document.getElementById('launch-dialog');

button.addEventListener('click', () => {
  document.querySelector('one-dialog').open = true;
  document.querySelector('teste-element').prop1 = Math.round(Math.random() * 100).toString()
})*/

import AppMain from './pages/home/AppMain'
import PageNotFound from './components/common/pageNotFound/PageNotFound'

import { Router } from '@vaadin/router'
import { routes } from './Routes/'

import baseStyles from './assets/css/style.styl'

document.querySelector('#baseStyle').textContent = baseStyles.toString()

customElements.define('app-main', AppMain)
customElements.define('page-not-found', PageNotFound)

const router = new Router(document.querySelector('#app'))

router.setRoutes(routes)