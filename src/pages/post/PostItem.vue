<template>
  <div class="post-item">
    <a-row>
      <a-col :xs="24" :md="10">
        <div class="post-item__img">
          <img :src="imgs[0]" alt="" />
          <div class="post-item__link d-center">
            <svg-icon icon-class="friendship" @click="handViewDetail" />
          </div>
        </div>
      </a-col>
      <a-col :xs="24" :md="14">
        <div class="post-item__text">
          <div class="post-item__tags">
            <my-tag value="Html" />
            <my-tag value="Html" />
          </div>
          <h2 class="post-item__title">原型和原型链</h2>
          <div class="post-item__word">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perspiciatis, repellat
            velit tenetur totam aliquam labore magni. Eos, harum accusamus.
          </div>
          <div class="post-item__about">
            <span>
              <svg-icon icon-class="liulan-inactive" />
              20
            </span>
            <span class="split">/</span>
            <span>
              <svg-icon icon-class="clock" />
              2020-10-23
            </span>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import postImg_01 from '@/assets/images/post/01.jpg'

export default {
  name: 'PostItem',

  components: {},

  props: {},

  data() {
    return {
      imgs: [postImg_01]
    }
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    handViewDetail() {}
  }
}
</script>
<style lang="less">
.post-item {
  position: relative;
  display: flex;
  .ant-col {
    height: 100%;
  }
  img {
    max-height: 195px;
    width: 100%;
    transition: @base-transition;
  }
  &:hover {
    img {
      transform: scale(1.4);
    }
  }
  &__img {
    position: relative;
    width: 100%;
    max-height: 195px;
    overflow: hidden;
    &:hover {
      .post-item__link {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  &__link {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: @base-transition;
    transform: scale(0);
    background: rgba(0, 0, 0, 0.4);
    #colors.text(text-color-dark);
    z-index: 9;
    .svg-icon {
      opacity: 0.8;
      font-size: 1.4rem;
      transition: @base-transition;
      #colors.text(text-color-light);
      &:hover {
        opacity: 0.4;
      }
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px;
    height: 100%;
  }
  &__title {
    margin-top: 8px;
    font-weight: 700;
    font-size: 24px;
    transition: @base-transition;
    #colors.link(link-color);
    &:hover {
      text-decoration: underline;
    }
  }
  &__about {
    margin-top: 8px;
    font-weight: 700;
    font-size: 14px;
    opacity: 0.6;
    #colors.text(text-color-dark);
    .svg-icon {
      font-size: 16px;
      margin-right: 6px;
      vertical-align: -0.1em;
    }
    .split {
      display: inline-block;
      margin: 0 6px;
      font-weight: 700;
      transform: rotate(-10deg);
    }
  }
}
</style>
