<template>
  <div class="about">
    <div class="about__me">
      <h2 class="about__title">
        关于
        <span class="title-bar"></span>
      </h2>
      <ul class="about__me-list">
        <li>
          <svg-icon icon-class="email-active" />
          525298429@qq.com
        </li>
        <li>
          <svg-icon icon-class="fly" />
          525298429@qq.com
        </li>
      </ul>
    </div>
    <div class="about__site item">
      <h2 class="about__title">
        网站
        <span class="title-bar"></span>
      </h2>
      <p>
        <span>+</span>
        前端：React + Antd + React-Hooks
      </p>
      <p>
        <span>+</span>
        后端：Node + Koa2 + Mysql
      </p>
      <p>
        <span>+</span>
        其他：Phpstudy + Navicat
      </p>
    </div>
    <div class="about__explain item">
      <h2 class="about__title">
        特别说明
        <span class="title-bar"></span>
      </h2>
      <p>
        <i></i>
        本站文章仅代表个人观点，和任何组织或个人无关。
      </p>
      <p>
        <i></i>
        本站前端开发代码没有考虑对IE浏览器的兼容
      </p>
      <p>
        <i></i>
        用户邮箱仅作回复消息用，不对外使用。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

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
<style lang="less" scoped>
.about {
  &__title {
    position: relative;
    padding: 16px 0 16px 60px;
    font-size: 24px;
    font-weight: 600;

    &::before {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      content: '';
      height: 4px;
      width: 35px;
      content: '';
      background: @color-blue;
    }
  }
  &__me {
    li {
      padding: 10px 0;
      .svg-icon {
        margin-right: 8px;
      }
    }
  }
  &__site {
    margin: 0 0 40px;
    p {
      margin-top: 16px;
    }
    span {
      margin-right: 8px;
    }
  }

  &__explain {
    p {
      margin-top: 16px;
    }
    i {
      display: inline-block;
      margin-right: 8px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      vertical-align: middle;
      #colors.background(bg-color-dark);
    }
  }
}
</style>
