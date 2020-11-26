<template>
  <div class="home">
    <section class="home__wrapper">
      <HomeSlider />
      <div class="home__wrapper-content d-center">
        <div class="home__logo"><span>GongC</span></div>
        <div class="home__print">
          <PrintWord :interval="300" text="欢迎来到我的博客空间"></PrintWord>
        </div>
        <div class="home__link">
          <a-button shape="round" size="large" @click="handNextPannel">
            继续浏览
            <a-icon type="down-circle" />
          </a-button>
          <a-button shape="round" size="large" @click="handReadMore">
            阅读更多
            <a-icon type="right-circle" />
          </a-button>
        </div>
        <div class="home__next_btn horizontally" @click="handNextPannel">
          <a-icon type="double-right" />
        </div>
      </div>
    </section>
    <PannelItem class="home__site-statis" title="站点统计">
      <a-row :gutter="[{ xs: 0, sm: 20, md: 40, lg: 60 }, 40]">
        <a-col :xs="24" :md="8">
          <div class="home__site-statis-item">
            <div class="icon">
              <svg-icon icon-class="post-active" />
            </div>
            <div class="word">
              <span>文章总数</span>
              <span>234</span>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :md="8">
          <div class="home__site-statis-item">
            <div class="icon">
              <svg-icon icon-class="dianzan" />
            </div>
            <div class="word">
              <span>点赞数</span>
              <span>234</span>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :md="8">
          <div class="home__site-statis-item">
            <div class="icon">
              <svg-icon icon-class="see" />
            </div>
            <div class="word">
              <span>浏览次数</span>
              <span>234</span>
            </div>
          </div>
        </a-col>
      </a-row>
    </PannelItem>
    <section class="home__banner d-center"><p>生活不止眼前的苟且</p></section>
    <PannelItem class="home__hot-post" title="推荐文章">
      <a-row :gutter="[{ xs: 10, sm: 10, md: 20, lg: 40 }, 40]">
        <a-col :xs="24" :md="8" v-for="(item, index) in 3" :key="index">
          <a-card class="hot-post__item" hoverable :bordered="false">
            <img slot="cover" alt="example" src="~@/assets/images/comm/13.jpg" width="100%" />
            <div class="hot-post__content">
              <div class="hot-post__tag">
                <MyTag value="Html" background="rgb(108, 192, 145)" />
                <MyTag value="Html" background="rgb(108, 192, 145)" />
                <MyTag value="Html" background="rgb(108, 192, 145)" />
              </div>
              <h2 class="hot-post__title">
                <span>原型链继承</span>
              </h2>
              <p class="hot-post__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci nemo
                reiciendis quos sint tempora eum ea provident illo laudantium?
              </p>
              <p class="hot-post__about">
                <span>
                  <svg-icon icon-class="date" />
                  2020-12-23
                </span>
                <span>
                  <svg-icon icon-class="liulan-inactive" />
                  23
                </span>
              </p>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </PannelItem>
    <section class="home__banner d-center"><p>还有诗和远方的田野</p></section>
    <PannelItem class="home__tag" title="标签">
      <WordChart />
    </PannelItem>
    <Footer />

    <ScreenMenu v-if="visible" />
    <div class="home__menu-btn" :class="{ 'home__menu-btn--open': visible }" @click="handOpenMenu">
      <span class="t_line"></span>
      <span class="m_line"></span>
      <span class="b_line"></span>
    </div>
  </div>
</template>

<script>
import { scrollTo } from '@/utils'
import HomeSlider from '@/views/HomeSlider'
import PrintWord from '@/components/PrintWord'
import PannelItem from './PannelItem'
import MyTag from '@/views/MyTag'
import WordChart from '@/views/WordChart'
import Footer from '@/layouts/Footer'
import ScreenMenu from './ScreenMenu'
const clientHeight = window.innerHeight

export default {
  name: 'Home',

  components: { HomeSlider, PrintWord, PannelItem, MyTag, WordChart, Footer, ScreenMenu },

  props: {},

  data() {
    return {
      visible: false
    }
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    handNextPannel() {
      scrollTo(clientHeight)
    },
    handReadMore() {
      this.$router.replace('/index')
    },
    handOpenMenu() {
      this.visible = !this.visible
    }
  }
}
</script>
<style lang="less">
.home {
  position: relative;
  &__wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    #colors.text(text-color-light);
    &-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      flex-direction: column;
    }
  }
  &__logo {
    font-size: 80px;
    font-family: ScaryGhost;
  }
  &__print {
    font-size: 24px;
  }
  &__link {
    margin-top: 80px;
    .ant-btn {
      padding: 0 50px;
      margin: 0 10px;
      height: 54px;
      line-height: 0.5em;
      border-width: 2px !important;
      #colors.text(text-color-light);
      #colors.border(primary-color);
      &:first-child {
        #colors.background(primary-color);
        &:hover {
          background: transparent !important;
          color: @color-blue !important;
        }
      }
      &:last-child {
        background: transparent;
        color: @color-blue !important;
        &:hover {
          #colors.background(primary-color);
          color: #fff !important;
        }
      }
    }
  }
  &__next_btn {
    bottom: 20px;
    transform: rotate(90deg);
    font-size: 24px;
    animation: next-show 0.6s linear, next-flash 1.2s ease-in-out infinite;
  }

  &__site-statis {
    &-item {
      display: flex;
      padding: 30px;
      box-shadow: 0 0 12px 4px #eee;
      .icon {
        margin-right: 24px;
        width: 48px;
        height: 48px;
        font-size: 20px;
        line-height: 48px;
        text-align: center;
        border-radius: 12px;
        background: linear-gradient(145deg, #e6e6e6, #ffffff);
        box-shadow: 5px 5px 10px #e8e8e8, -5px -5px 10px #ffffff;
      }
      .word span {
        display: block;
      }
    }
  }

  &__hot-post {
    .hot-post {
      &__item {
        &:hover {
          box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12),
            0 5px 12px 4px rgba(0, 0, 0, 0.09);
        }
      }
      &__tag {
        display: flex;
        white-space: nowrap;
      }
      &__title {
        padding-top: 10px;
        font-weight: 700;
        font-size: 22px;
        transition: @base-transition;
        transition-duration: 0.2s;
        #colors.link();
        &:hover {
          text-decoration: underline;
        }
      }
      &__about {
        display: flex;
        justify-content: space-between;
        span .svg-icon {
          margin-right: 6px;
        }
      }
    }
  }

  &__banner {
    height: 420px;
    background: url('~@/assets/images/comm/02.jpg') no-repeat fixed;
    background-position: center top;
    background-size: 100%;
    &:nth-of-type(2) {
      background: url('~@/assets/images/comm/01.jpg') no-repeat fixed;
    }
    &:nth-of-type(3) {
      background: url('~@/assets/images/comm/03.jpg') no-repeat fixed;
    }
    p {
      font-size: 1.4rem;
      font-weight: 600;
      #colors.text(text-color-light);
    }
  }

  &__screen-menu {
    height: 100vh;
  }

  &__menu-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
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
}
</style>
