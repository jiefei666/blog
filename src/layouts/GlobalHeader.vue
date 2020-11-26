<template>
  <div
    class="global-header"
    :class="{ 'global-header--fixed': fixed, 'global-header__menu--mobile': mode === 'vertical' }"
  >
    <div class="global-header__wrap container">
      <div class="global-header__logo" v-if="mode === 'horizontal'">
        <span>CongC</span>
      </div>
      <div class="global-header__menu" v-show="visible">
        <a-menu v-model="current" :mode="mode">
          <a-menu-item
            v-for="(item, index) in menuList"
            :key="index"
            @click="handChangePage(item.key)"
          >
            <svg-icon v-show="fixed" :icon-class="item.key" />
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </div>
      <div
        v-if="mode === 'vertical'"
        class="global-header__menu-btn"
        :class="{ 'global-header__menu-btn--open': visible }"
        @click="handOpenMenu"
      >
        <span class="t_line"></span>
        <span class="m_line"></span>
        <span class="b_line"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { onEvent, offEvent } from '@/utils'
const body = document.documentElement || document.body
export default {
  name: 'GlobalHeader',

  components: {},

  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },

  data() {
    const clientWd = window.innerWidth
    return {
      mode: 'horizontal',
      current: [],
      visible: true,
      clientWd: clientWd,
      menuList: [
        { name: '主页', icon: 'icon-shouye', key: 'home' },
        { name: '文章', icon: 'icon-wenzhang1', key: 'post' },
        { name: '留言', icon: 'icon-liuyan', key: 'guestbook' },
        { name: '关于', icon: 'icon-guanyu1', key: 'about' },
        { name: '足迹', icon: 'icon-foot', key: 'footprint' },
        { name: '友链', icon: 'icon-youqinglianjie1', key: 'friendship' }
      ]
    }
  },

  watch: {
    clientWd: {
      handler(val) {
        if (val && val < 768) {
          this.mode = 'vertical'
          this.visible = false
        } else {
          this.mode = 'horizontal'
          this.visible = true
        }
      },
      immediate: true
    }
  },

  computed: {},

  created() {},

  mounted() {
    onEvent(window, 'resize', this.resizeEvent)
  },

  beforeDestroy() {
    offEvent(window, 'resize', this.resizeEvent)
  },

  methods: {
    handChangePage(name) {
      this.$router.push({ name: name })
    },
    handOpenMenu() {
      this.visible = !this.visible
    },
    resizeEvent(e) {
      this.clientWd = e.target.innerWidth
    }
  }
}
</script>
<style lang="less">
.global-header {
  position: relative;
  width: 100%;
  z-index: 9;
  background: rgba(255, 255, 255, 0.4);

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    opacity: 0;
    font-size: 44px;
    font-weight: 900;
    font-family: ScaryGhost;
    #colors.text(text-color-dark);
  }

  &__menu {
    .ant-menu {
      line-height: 64px;
      border: none;
      background: transparent;
    }
    .ant-menu-item {
      height: 100%;
      font-size: 15px;
      font-weight: 700;
      transition: @base-transition;
      .svg-icon {
        color: @white;
        vertical-align: middle;
        font-weight: 900;
      }
    }
    .ant-menu-horizontal {
      height: 64px;
      > .ant-menu-item-active,
      > .ant-menu-item-selected {
        color: @color-blue;
        border-bottom-color: @color-blue;
      }
    }
    .ant-menu-vertical {
      height: auto;
      > .ant-menu-item-active,
      > .ant-menu-item-selected {
        color: @color-blue;
        border-bottom-color: @color-blue;
      }
    }
    &--mobile {
      border: none;
      #colors.background(bg-color-light);
      .global-header__menu {
        padding: 40px 0;
      }
    }
  }
  &__menu-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    box-sizing: content-box;
    z-index: 9;
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 60%;
      transform: translate(-50%, -50%);
      transform-origin: center;
      transition: @base-transition;
      height: 1.5px;
      #colors.background(bg-color-light);
    }
    &--open {
      .t_line {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      .m_line {
        opacity: 0;
        transform: translate(-50%, -50%) rotate(180deg);
      }
      .b_line {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
  &--mobile {
    border: none;
  }
  &--fixed {
    position: fixed;
    top: -100px;
    border: none;
    background: @color-blue;
    animation: head-fade 0.4s linear;
    animation-fill-mode: both;
    .global-header__logo {
      opacity: 1;
      color: #fff !important;
    }
    .ant-menu-item {
      height: 100%;
      font-size: 15px;
      font-weight: 700;
      color: #fff;
      transition: @base-transition;
    }
    .ant-menu-horizontal {
      > .ant-menu-item-active,
      > .ant-menu-item-selected {
        color: @white;
        border-bottom-color: @white;
        opacity: 0.6;
      }
    }
  }
}
</style>
