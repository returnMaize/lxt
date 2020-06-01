import './font/iconfont.css'
import './scss/index.scss'

import Alert from './components/alert/Alert'
import Avatar from './components/avatar/Avatar'
import Breadcrumb from './components/breadcrumb/Breadcrumb'

const compoents = [Alert, Avatar, Breadcrumb].map(component => {
  component.install = Vue => {
    Vue.component(component.name, component)
  }
  return component
})

const install = Vue => {
  compoents.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Alert,
  Avatar,
  Breadcrumb
}