<template>
  <div class="login ">
    <div class="login-form__wrap p-center">
      <div class="login-form__header">
        <span :class="{ active: mode === 'login' }" @click="handLogin">登录</span>
        <span :class="{ active: mode === 'register' }" @click="handRegister">注册</span>
      </div>
      <div class="login-form__body">
        <a-form-model ref="formRef" :model="form" :rules="rules">
          <a-form-model-item prop="username">
            <a-input v-model="form.username" placeholder="昵称" />
          </a-form-model-item>
          <a-form-model-item prop="password">
            <a-input v-model="form.password" placeholder="密码" />
          </a-form-model-item>
          <a-form-model-item prop="confimPass" v-if="mode === 'register'">
            <a-input v-model="form.confimPass" placeholder="确认密码" />
          </a-form-model-item>
          <a-form-model-item prop="email" v-if="mode === 'register'">
            <a-input v-model="form.email" placeholder="邮箱" />
          </a-form-model-item>
          <a-button type="primary" shape="round" @click="handSubmit">提交</a-button>
        </a-form-model>
      </div>
      <div class="login-form__footer"><a-icon type="github" /></div>
    </div>
    <Particles id="tsparticles" class="login__particles" :options="options" />
  </div>
</template>

<script>
import { particlesOption } from './helper'
import { mapActions } from 'vuex'

export default {
  name: 'Login',

  components: {},

  props: {},

  data() {
    const checkPass = (rule, val, cb) => {
      if (val === '') {
        cb(new Error('确认密码不能为空'))
      } else if (val !== this.form.password) {
        cb(new Error('密码输入不一致'))
      } else {
        cb()
      }
    }
    const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return {
      mode: 'register',
      options: particlesOption(),
      form: {
        username: '',
        password: '',
        confimPass: '',
        email: ''
      },
      rules: {
        username: [{ required: true, min: 2, message: '昵称最少两个字符' }],
        password: [{ required: true, min: 4, max: 20, message: '密码请输入4位数以上密码' }],
        confimPass: [{ validator: checkPass }],
        email: [
          {
            required: true,
            pattern: emailReg,
            message: '请输入正确的邮箱格式'
          }
        ]
      }
    }
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    ...mapActions('user', ['userLogin']),
    handRegister() {
      this.mode = 'register'
    },

    handLogin() {
      this.mode = 'login'
    },

    handSubmit() {
      this.$refs.formRef.validate(valid => {
        console.log(valid)

        if (!valid) return
        if (this.mode === 'register') {
          // userRegister()
        }
        if (this.mode === 'login') {
          this.userLogin({
            password: this.form.password,
            username: this.form.username
          })
        }
      })
    }
  }
}
</script>
<style lang="less">
.login {
  position: relative;
  height: 100vh;
  &__particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .login-form {
    &__wrap {
      padding: 30px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.8);
      z-index: 1;
    }

    &__header {
      text-align: center;
      span {
        display: inline-block;
        padding: 10px;
        color: #000;
        &.active {
          color: @color-blue;
        }
      }
    }

    &__body {
      margin-top: 10px;
      .ant-form {
        display: flex;
        flex-direction: column;
      }
      .ant-form-item-children {
        display: inline-block;
        padding: 2px;
        border-radius: 26px;
        background-image: linear-gradient(45deg, #e0c3fc 0%, #8ec5fc 100%);
      }
      .ant-form-explain {
        text-indent: 1em;
      }
      .ant-input {
        border: none;
        height: 40px;
        width: 320px;
        border-radius: 26px;
        text-align: center;
        background: rgb(255, 255, 255);
        transition: @base-transition;
        border-bottom: 1px solid #ccc;
        &:focus,
        .ant-input-focused {
          box-shadow: 0 1px 1px #40a9ff;
        }
      }
      .ant-btn {
        margin: 0 auto;
        width: 40%;
        background-image: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
      }
    }

    &__footer {
      padding: 20px 0 0;
      text-align: center;
      font-size: 20px;
      i:hover {
        color: #000;
      }
    }
  }
}
</style>
