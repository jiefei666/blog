<template>
  <div class="post">
    <ul class="post__list">
      <li class="post__item" v-for="(item, index) in 6" :key="index"><PostItem /></li>
    </ul>
  </div>
</template>

<script>
import PostItem from './PostItem'

export default {
  name: 'Post',

  components: { PostItem },

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
.post {
  &__item {
    padding: 20px 0;
    border-bottom: 1px dotted #dee2e6;
  }
}
</style>
