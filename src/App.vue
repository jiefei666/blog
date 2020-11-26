<template>
  <div class="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <div class="app__back-top">
      <a-back-top>
        <div class="app__back-top-inner d-center">
          <svg-icon icon-class="back-top" />
        </div>
      </a-back-top>
    </div>
    <ToolsBar />
  </div>
</template>

<script>
const body = document.getElementsByTagName('body')[0]
import ToolsBar from '@/views/ToolsBar'

export default {
  name: 'App',

  components: { ToolsBar },

  props: {},

  data() {
    return {}
  },

  computed: {},

  created() {},

  mounted() {
    body.setAttribute('data-theme', 'light')
  },

  methods: {
    handChange() {
      const body = document.getElementsByTagName('body')[0]
      const theme = body.getAttribute('data-theme')
      console.log(theme)

      if (theme == 'light') {
        body.setAttribute('data-theme', 'dark')
      } else {
        body.setAttribute('data-theme', 'light')
      }
    }
  }
}
</script>
<style lang="less">
.app {
  &__back-top {
    .ant-back-top {
      right: 20px;
      bottom: 20px;
      .svg-icon {
        font-size: 32px;
      }
    }
    &-inner {
      height: 100%;
      border-radius: 50%;
      text-align: center;
      box-shadow: 0 0 12px rgb(243, 237, 237);
    }
  }
}
</style>
