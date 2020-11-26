<template>
  <div class="slider-bar">
    <h3 class="slider-bar__title">
      <svg-icon :icon-class="iconClass" />
      <span>{{ title }}</span>
    </h3>
    <div class="slider-bar__content"><slot /></div>
  </div>
</template>

<script>
export default {
  name: 'SliderBar',

  components: {},

  props: {
    title: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    }
  },

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
.slider-bar {
  margin-bottom: 60px;
  &__title {
    padding-bottom: 20px;
    margin-bottom: 0;
    font-size: 16px;
    letter-spacing: 0.8px;
    // border-bottom: 1px solid #e6e6e6;
    border-bottom: 1px solid rgb(17, 17, 17);
  }
  .svg-icon {
    margin-right: 10px;
    vertical-align: middle;
  }
}
</style>
