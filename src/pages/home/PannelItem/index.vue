<template>
  <section class="pannel-item">
    <h2 class="pannel-item__title">{{ title }}</h2>
    <div class="pannel-item__content container">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'PannelItem',

  components: {},

  props: {
    title: {
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
.pannel-item {
  margin: 80px 0 120px;
  &__title {
    position: relative;
    margin-bottom: 80px;
    text-align: center;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 1px;
    &::after {
      position: absolute;
      left: 50%;
      bottom: -10px;
      content: '';
      width: 40px;
      transform: translateX(-50%);
      height: 4px;
      #colors.background(primary-color);
    }
  }
}
</style>
