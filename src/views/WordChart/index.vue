<script>
import echarts from 'echarts'
import 'echarts-wordcloud'
import 'echarts/theme/macarons.js'
import { wordOption } from './helper'

let instance = null

export default {
  name: 'WordChart',

  mounted() {
    this.initChart()
  },

  methods: {
    async initChart() {
      if (instance) return instance.setOption(wordOption)
      await this.$nextTick()
      const wordChart = document.getElementById('word-chart')
      instance = echarts.init(wordChart)
      instance.setOption(wordOption())
    }
  },
  render(h) {
    return h('div', {
      attrs: { id: 'word-chart' },
      style: {
        height: '400px'
      }
    })
  }
}
</script>
