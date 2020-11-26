<template>
  <span class="my-tag" :style="{ backgroundColor: background }">{{ value }}</span>
</template>

<script>
export default {
  name: 'MyTag',

  components: {},

  props: {
    value: String,
    background: {
      type: String,
      default: '#6610f2'
    }
  },

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
.my-tag {
  padding: 1px 10px;
  margin: 0 6px 6px 0;
  color: #fff;
  font-size: 15px;
  line-height: 1.5em;
  border-radius: 4px;
  &:hover {
    opacity: 0.6;
  }
}
</style>
