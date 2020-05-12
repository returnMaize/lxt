import './scss/index.scss'

import Button from './components/button/Button.vue'
import ButtonGroup from './components/button/ButtonGroup.vue'
import Input from './components/input/Input.vue'

const components = [Button, ButtonGroup, Input].map(component => {
  component.install = Vue => {
    Vue.component(component.name, component)
  }
  return component
})

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Button,
  ButtonGroup,
  Input
}

