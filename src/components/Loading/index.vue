<template>
  <section class="mod model-6">
    <div class="spinner"></div>
  </section>
</template>

<script>
export default {
  name: 'Loading',

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
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-family: arial;
}

body {
  padding: 0;
  margin: 0;
  text-align: center;
  font-family: arial;
}

section {
  height: 100vh;
  float: left;
  width: 100%;
  position: relative;
}

.spinner {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.model-6 {
  background: #009200;
}
.model-6 .spinner {
  border: 2px solid #19a5df;
  border-radius: 0;
  -webkit-animation: rotate 3s infinite;
  animation: rotate 3s infinite;
}
.model-6 .spinner:after,
.model-6 .spinner:before {
  content: '';
  position: absolute;
  left: 5px;
  top: 5px;
  width: 32px;
  height: 32px;
  border: 2px solid #feb825;
  -webkit-animation: rotate 3s infinite reverse;
  animation: rotate 3s infinite reverse;
}
.model-6 .spinner:before {
  border-color: #fff;
  left: 10px;
  top: 10px;
  width: 22px;
  height: 22px;
  -webkit-animation: rotate 2s infinite;
  animation: rotate 2s infinite;
}

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  from {
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
