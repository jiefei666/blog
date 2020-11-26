<template>
  <div
    class="tools-bar"
    :class="{ 'tools-bar--open': isOpen }"
    @mouseenter="onMouseOver"
    @mouseleave="onMouseLeave"
  >
    <ul class="tools-bar__list">
      <li class="tools-bar__item" @click="handClickLogin">
        <svg-icon icon-class="login" />
      </li>
      <li class="tools-bar__item">
        <svg-icon icon-class="dark" />
      </li>
    </ul>
    <div class="tools-bar__btn"></div>
  </div>
</template>

<script>
export default {
  name: 'ToolsBar',

  components: {},

  props: {},

  data() {
    return {
      isOpen: false
    }
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    onMouseOver() {
      this.isOpen = true
    },
    onMouseLeave() {
      this.isOpen = false
    },

    handClickLogin() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style lang="less" scoped>
.p {
  position: absolute;
}
.tools-bar {
  position: fixed;
  right: 20px;
  bottom: 120px;
  &--open {
    .tools-bar__btn {
      animation: animate__btn 1s linear both;
    }
    .tools-bar__list {
      animation: animate_tools 2s linear both;
    }
  }
  &__list {
    position: absolute;
    padding: 20px 0;
    top: 50%;
    width: 40px;
    border-radius: 20px;
    transform: translate(0, -50%) scale(0);
    box-shadow: 0 0 12px rgb(228, 226, 226);
    &::after {
      .p();
      right: -30px;
      top: 50%;
      content: '';
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border: 15px solid transparent;
      border-left: 20px solid #fff;
      z-index: -1;
    }
  }
  &__item {
    text-align: center;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
  &__btn {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 12px rgb(243, 237, 237);
    &::after,
    &::before {
      position: absolute;
      left: 50%;
      top: 50%;
      content: '';
      transform: translate(-50%, -50%);
      background: @color-blue;
      border-radius: 20px;
    }
    &::after {
      width: 60%;
      height: 3px;
    }
    &::before {
      height: 60%;
      width: 3px;
    }
  }
}
</style>
