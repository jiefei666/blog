<template>
  <div class="slider">
    <SliderBar class="" title="推荐文章" iconClass="recommend">
      <ul class="slider__list">
        <li class="slider__item">
          <div class="slider__item-img">
            <img :src="imgs.postImg_01" alt="" />
          </div>
          <div class="slider__item-text">
            <p class="slider__item-desc mutil-overflow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, cupiditate.
            </p>
            <span class="slider__item-time">2020-12-20</span>
          </div>
        </li>
        <li class="slider__item">
          <div class="slider__item-img">
            <img :src="imgs.postImg_01" alt="" />
          </div>
          <div class="slider__item-text">
            <p class="slider__item-desc mutil-overflow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, cupiditate.
            </p>
            <span class="slider__item-time">2020-12-20</span>
          </div>
        </li>
        <li class="slider__item">
          <div class="slider__item-img">
            <img :src="imgs.postImg_01" alt="" />
          </div>
          <div class="slider__item-text">
            <p class="slider__item-desc mutil-overflow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, cupiditate.
            </p>
            <span class="slider__item-time">2020-12-20</span>
          </div>
        </li>
      </ul>
    </SliderBar>
    <SliderBar class="slider__category" title="分类" iconClass="category">
      <ul class="slider__list">
        <li class="slider__item">
          <span>面试</span>
          <i>【12】</i>
        </li>
        <li class="slider__item">
          <span>博客搭建</span>
          <i>【12】</i>
        </li>
      </ul>
    </SliderBar>
    <!-- <SliderBar class="slider__statis" title="统计" iconClass="static">
      adfsasf
    </SliderBar> -->
    <SliderBar class="slider__tags" title="标签" iconClass="label">
      <ul class="slider__list">
        <li v-for="(item, index) in 16" :key="index" @click.prevent="handClickTag(index)">
          <a href="" :class="{ active: index == current }">Html</a>
        </li>
      </ul>
    </SliderBar>
  </div>
</template>

<script>
import SliderBar from '@/views/SliderBar'
import postImg_01 from '@/assets/images/post/01.jpg'

export default {
  name: 'Slider',

  components: { SliderBar },

  props: {},

  data() {
    return {
      current: 5,
      imgs: {
        postImg_01
      }
    }
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    handClickTag(index) {
      this.current = index
    }
  }
}
</script>
<style lang="less">
.slider {
  padding: 0 20px;
  overflow: hidden;
  #colors.text(text-color-dark);
  &__list {
    margin-top: 20px;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    padding: 14px 0;
    &:last-child {
      padding-bottom: 0;
    }
    img {
      width: 100px;
      height: 100%;
      max-height: 74px;
    }
    &-img {
      flex: 1;
    }
    &-text {
      flex: 2;
      padding-left: 16px;
      max-width: 200px;
    }
  }
  &__category,
  &__statis {
    li {
      position: relative;
      font-size: 14px;
      padding: 10px 2px !important;
      border-bottom: 1px dotted #dee2e6;

      &::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        transition: @base-transition;
        border-bottom: 1px solid @color-green;
      }
      &:hover {
        opacity: 0.65;
        color: @color-green;
        &::after {
          transform: scaleX(1);
        }
      }
      i {
        color: #ccc;
      }
    }
  }
  &__tags {
    li {
      position: relative;
      display: inline-block;
      margin: 0 4px 4px 0;
      a {
        padding: 2px 6px;
        color: gray;
        font-size: 15px;
        border-radius: 4px;
        background: #f2f2f2;
        &.active {
          color: #fff;
          background: @color-blue;
        }
        &:hover {
          color: #fff;
          background: @color-blue;
        }
      }
    }
  }
}
</style>
