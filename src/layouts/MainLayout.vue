<template>
  <a-layout class="main-layout">
    <a-layout-header><GlobalHeader :fixed="fixed" /></a-layout-header>
    <a-layout-content>
      <div ref="bannerRef" class="main-layout__banner d-center" :style="{ height: '60vh' }">
        <h1 class="main-layout__title">{{ title }}</h1>
      </div>
      <div class="main-layout__content-wrap container">
        <div class="main-layout__content">
          <a-row :gutter="40">
            <a-col :xs="24" :lg="16">
              <router-view></router-view>
            </a-col>
            <a-col :xs="0" :lg="8">
              <div class="main-layout__slider" v-if="$route.meta.slider"><Slider /></div>
            </a-col>
          </a-row>
        </div>
        <div class="main-layout__footer">
          <p>{{ copyRight }}</p>
        </div>
        <img class="main-layout__shadow" src="~@/assets/images/comm/shadow.png" alt="" />
      </div>
    </a-layout-content>
    <!-- <a-layout-footer></a-layout-footer> -->
  </a-layout>
</template>

<script>
import { onEvent, offEvent } from '@/utils'
import config from '@/config'
import Slider from './Slider'
import GlobalHeader from './GlobalHeader'
const body = document.documentElement || document.body

export default {
  name: 'MainLayout',

  components: { GlobalHeader, Slider },

  props: {},

  data() {
    return {
      fixed: false,
      title: '',
      copyRight: config.COPY_RIGHT
    }
  },

  watch: {
    $route: {
      handler(value) {
        this.title = value.meta.title
      },
      immediate: true
    }
  },

  computed: {},

  created() {},

  mounted() {
    onEvent(window, 'scroll', this.scrollEvent)
  },

  beforeDestroy() {
    offEvent(window, 'scroll', this.scrollEvent)
  },

  methods: {
    async scrollEvent() {
      await this.$nextTick()
      const bannerHeight = this.$refs.bannerRef.offsetHeight
      if (body.scrollTop > bannerHeight) {
        this.fixed = true
      } else {
        this.fixed = false
      }
    }
  }
}
</script>
<style lang="less">
.p {
  position: absolute;
  top: 0;
  left: 0;
}
.main-layout {
  .ant-layout-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  .ant-layout-header {
    padding: 0;
  }
  .ant-layout-footer {
    .p();
    bottom: 0 !important;
  }
  &__banner {
    position: relative;
    background: #fff url('~@/assets/images/comm/banner_01.jpg') no-repeat center top / cover;
    z-index: 1;
    &::after {
      .p();
      content: '';
      width: 100%;
      height: 100%;
      background: rgb(47, 84, 235);
      opacity: 0.25;
    }
  }
  &__title {
    position: relative;
    font-weight: 600;
    font-size: 2.4rem;
    letter-spacing: 4px;
    #colors.text(text-color-light);
    z-index: 1;
  }
  &__content-wrap {
    position: relative;
    transform: translateY(-46px);
    padding-top: 46px;
    padding-left: 40px;
    padding-right: 40px;
    box-shadow: 2px 2px 16px #ccc;
    #colors.background(bg-color-default);
    z-index: 2;
  }
  &__content {
    position: relative;
    z-index: 2;
    #colors.background(bg-color-default);
  }
  &__shadow {
    .p();
    top: 46px;
    left: -26px;
    right: -34px;
    width: 80%;
    max-width: 200%;
    z-index: -1;
  }
  &__footer {
    position: absolute;
    bottom: -100px;
    left: 0;
    right: 0;
    padding: 20px 0;
    text-align: center;
  }
}
</style>
