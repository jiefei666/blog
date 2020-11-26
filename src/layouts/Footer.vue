<template>
  <section class="footer">
    <div class="footer__wrap container">
      <div class="footer__links">
        <a href="#" @click.prevent="handClick">
          <svg-icon icon-class="github" />
        </a>

        <a-tooltip placement="topLeft">
          <template slot="title">
            <span>525298429</span>
          </template>
          <a href="#" @click.prevent="handClick">
            <svg-icon icon-class="qq" />
          </a>
        </a-tooltip>

        <a-tooltip placement="topLeft">
          <template slot="title">
            <span>525298429@qq.com</span>
          </template>
          <a href="#" @click.prevent="handClick">
            <svg-icon icon-class="email" />
          </a>
        </a-tooltip>
      </div>
      <div class="footer__copyright">{{ copyRight }}</div>
    </div>
  </section>
</template>

<script>
import config from '@/config'

export default {
  name: 'Footer',

  components: {},

  props: {},

  data() {
    return {
      copyRight: config.COPY_RIGHT
    }
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    handClick(e) {}
  }
}
</script>
<style lang="less">
.footer {
  padding: 20px 0 10px;
  box-shadow: 0 -1px 1px #dee2e6;
  &__links {
    text-align: center;
    a {
      display: inline-block;
      margin: 0 12px;
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-radius: 50%;
      background: @color-gray;
      &:hover {
        opacity: 0.8;
      }
      .scg-icon {
        font-size: 1.2rem;
        color: #fff;
      }
    }
  }
  &__copyright {
    margin-top: 10px;
    text-align: center;
    color: #000;
  }
}
</style>
