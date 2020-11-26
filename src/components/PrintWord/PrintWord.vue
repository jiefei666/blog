<template>
  <div className="print-word">
    <span className="text">{{ value }}</span>
    <span className="cursor" :style="{ animation: `print ${interval}ms linear infinite` }">
      |
    </span>
  </div>
</template>

<script>
export default {
  name: 'PrintWord',

  components: {},

  props: {
    text: {
      type: String,
      default: '还没有文字'
    },
    interval: {
      type: Number,
      default: 500
    }
  },

  data() {
    return {
      value: ''
    }
  },

  computed: {},

  created() {},

  mounted() {
    this.startPrint(1)
  },

  methods: {
    changeText(val) {
      return new Promise(reslove => {
        setTimeout(async () => {
          this.value = val
          reslove()
        }, this.interval)
      })
    },

    async startPrint(type) {
      if (type) {
        //展开
        for (let i = 1; i <= this.text.length; i++) {
          await this.changeText(this.text.substr(0, i))
        }
      } else {
        //隐藏
        for (let i = this.text.length - 1; i >= 0; i--) {
          await this.changeText(this.text.substr(0, i))
        }
      }

      setTimeout(() => {
        //暂停500ms 打印一次
        this.startPrint(!type)
      }, 500)
    }
  }
}
</script>
<style lang="less">
.print-word {
  height: 40px;
  .text {
    color: #fff;
  }
  .cursor {
    color: rgba(0, 0, 0, 0.1) !important;
    animation: print 0.3s linear infinite;
  }
}

@keyframes print {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
