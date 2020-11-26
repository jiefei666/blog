<template>
  <div class="screen-menu">
    <ul class="screen-menu__list p-center">
      <li><span>首页</span></li>
      <li><span>文章</span></li>
      <li><span>留言</span></li>
      <li><span>关于</span></li>
      <li><span>足迹</span></li>
      <li><span>友链</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ScreenMenu',

  components: {},

  props: {},

  data() {
    return {}
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {}
}
</script>
<style lang="less">
.p {
  position: absolute;
  content: '';
}
.screen-menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5) url(~@/assets/images/comm/bg-menu-full.jpg) no-repeat center center /
    cover;
  z-index: 9;
  animation: fade-in 0.4s linear;
  &:after {
    .p();
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  &__list {
    display: flex;
    width: 50%;
    flex-direction: column;
    color: rgb(216, 214, 214);
    font-size: 20px;
    z-index: 2;
    li {
      position: relative;
      text-align: center;
      padding: 10px 0;
      animation: fly-in 0.4s linear;
      &:nth-of-type(1) {
        animation-delay: 0.4s;
      }
      &:nth-of-type(2) {
        animation-delay: 0.6s;
      }
      &:nth-of-type(3) {
        animation-delay: 0.8s;
      }
      &:nth-of-type(4) {
        animation-delay: 1s;
      }
      &:nth-of-type(5) {
        animation-delay: 1.2s;
      }
      &:nth-of-type(6) {
        animation-delay: 1.4s;
      }
      &::after {
        .p();
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        transform: scale(0);
        transform-origin: center bottom;
        transition: @base-transition;
        #colors.background(link-color);
      }
      &:hover {
        #colors.text(link-color);
      }
      &:hover::after {
        transform: scale(1);
      }
    }
  }
}
</style>
