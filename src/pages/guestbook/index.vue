<template>
  <div class="guest-book ">
    <div class="guest-book__form">
      <CommentForm @on-submit="onSubmitComment" />
    </div>
    <div class="guest-book___list">
      <Comments @on-submit="onSubmitReply" />
    </div>
  </div>
</template>

<script>
import CommentForm from '@/views/CommentForm'
import Comments from '@/views/Comments'

export default {
  name: '',

  components: { CommentForm, Comments },

  props: {},

  data() {
    return {}
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    onSubmitComment(val) {},
    onSubmitReplay(val) {},
    handSubmit(val) {}
  }
}
</script>
<style lang="less">
.guest-book {
  padding: 20px;
  #colors.background(bg-color-light);
  &__list {
    padding-top: 40px;
  }
}
</style>
