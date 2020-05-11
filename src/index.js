import './scss/index.scss'

import Button from './components/button/Button.vue'
import Link from './components/link/Link.vue'

const components = [Button, Link].map(component => {
  component.install = Vue => {
    Vue.components(component.name, component)
  }
  return component
})

const install = Vue => {
  components.forEach(component => {
    Vue.components(component.name, component)
  })
}

export default {
  install,
  Button,
  Link
}

