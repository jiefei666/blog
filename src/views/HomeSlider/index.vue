<template>
  <a-carousel class="home-slider" autoplay :dots="false">
    <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
      <a-icon type="right-circle" />
    </div>
    <div class="home-slider__item">
      <img src="~@/assets/images/comm/03.jpg" alt="" />
    </div>
    <div class="home-slider__item">
      <img src="~@/assets/images/comm/01.jpg" alt="" />
    </div>
  </a-carousel>
</template>

<script>
export default {
  name: 'HomeSlider',

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
.home-slider {
  height: 100vh;
  &__item {
    height: 100vh;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .slick-slider {
    height: 100%;
    overflow: hidden;
  }
  &__arrow--pre,
  &__arrow--next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }
  .ant-carousel .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
  }
  .ant-carousel .custom-slick-arrow:before {
    display: none;
  }
  .ant-carousel .custom-slick-arrow:hover {
    opacity: 0.5;
  }
}
</style>
