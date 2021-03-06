import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faListUl, faAngleLeft, faCog, faChartBar, faEllipsisV, faPlay, faPlus, faStop, faPause, faVolumeUp, faVolumeMute, faSyncAlt, faTrash, faCheck, faPowerOff, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueGAPI from 'vue-gapi'
import ga from 'vue-ga'

library.add(faListUl, faAngleLeft, faCog, faChartBar, faEllipsisV, faPlay, faPlus, faStop, faPause, faVolumeUp, faVolumeMute, faSyncAlt, faTrash, faCheck, faPowerOff, faUserCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const apiConfig = {
  apiKey: 'AIzaSyAY4THLuVYiFhrRAPZCseQDbCO3bxNJD9A',
  clientId: '624530488961-chtl120tenn14g9i8elqlj5m49888nau.apps.googleusercontent.com',
  discoveryDocs: ['https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest'],
  scope: 'https://www.googleapis.com/auth/spreadsheets' // See, edit, create, and delete your spreadsheets in Google Drive
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
}

Vue.use(VueGAPI, apiConfig)

ga(collect => {
  collect(location.pathname + location.hash)
}, 'UA-62416681-1')

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
