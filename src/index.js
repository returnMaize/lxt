import './font/iconfont.css'
import './scss/index.scss'

import Alert from './components/alert/Alert'
import Avatar from './components/avatar/Avatar'
import Breadcrumb from './components/breadcrumb/Breadcrumb'
import Button from './components/button/Button'

const compoents = [Alert, Avatar, Breadcrumb, Button].map(component => {
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
  Breadcrumb,
  Button
}