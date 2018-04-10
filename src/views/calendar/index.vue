<template>
   <div class="calendar">
      <p>这是日历的父组件，日视图，周视图，月视图，都应该在它的子路由下面</p>
      <router-view />
   </div>
</template>

<script>
export default {
  name: 'calendar',
  components: {},
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.calendar {
}
</style>
