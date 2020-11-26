import {
  Button,
  Carousel,
  Icon,
  Row,
  Col,
  Layout,
  Card,
  Tooltip,
  Menu,
  FormModel,
  Input,
  List,
  Comment,
  BackTop
} from 'ant-design-vue'

const install = Vue => {
  const components = [
    Button,
    Carousel,
    Icon,
    Row,
    Col,
    Layout,
    Card,
    Tooltip,
    Menu,
    FormModel,
    Input,
    List,
    Comment,
    BackTop
  ]

  components.forEach(cmp => {
    if (cmp.install) {
      Vue.use(cmp)
    } else if (cmp.name) {
      Vue.component(cmp.name, cmp)
    }
  })
}

export default {
  install: install
}
