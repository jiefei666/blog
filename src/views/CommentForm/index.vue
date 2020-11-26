<template>
  <div class="comment-form">
    <a-form-model ref="commentRef" :modal="form" :rules="rules">
      <a-form-model-item prop="content">
        <a-input
          v-model="form.content"
          type="textarea"
          placeholder="请输入留言内容"
          :auto-size="{ minRows: minRow, maxRows: maxRow }"
        />
      </a-form-model-item>
      <div class="comment-form__btn">
        <a-button type="primary" shape="round" :size="btnSize" @click="handSubmit">提交</a-button>
        <a-button type="primary" shape="round" :size="btnSize" @click="handReset">重置</a-button>
      </div>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: 'CommentForm',

  components: {},

  props: {
    maxRow: {
      type: Number,
      default: 14
    },
    minRow: {
      type: Number,
      default: 12
    },
    btnSize: {
      type: String,
      default: 'large',
      validator: val => {
        return ['large', 'small'].includes(val)
      }
    }
  },

  data() {
    return {
      form: {
        content: ''
      },
      rules: {
        content: [{ required: true, message: '请输入留言内容', trigger: 'change' }]
      }
    }
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    handSubmit() {
      this.$refs.commentRef.validate(valid => {
        if (valid) {
          this.$emit('on-submit', this.form.content)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handReset() {
      console.log(this.form.content)

      this.$refs.commentRef.resetFields()
    }
  }
}
</script>
<style lang="less">
.comment-form {
  .ant-input {
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    resize: none;
    border-bottom: 1px solid #ccc;
    &:hover {
      border: none;
      border-bottom: 1px solid #40a9ff;
    }
    &:focus,
    .ant-input-focused {
      box-shadow: 0 1px 1px #40a9ff;
    }
  }
  &__btn .ant-btn {
    margin-right: 20px;
    // height: 44px;
    line-height: 1em;
    // padding: 16px 48px;
    border: none;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  }
}
</style>
