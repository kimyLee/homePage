<template>
  <div class="">
    <h1>test iframe</h1>
    <iframe name="iframeName" id="iframeId" src="http://localhost:8082/#/iframeChild"></iframe>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.getElementById('iframeId').onload = () => {
        console.log('success')
        console.log(window.frames['iframeName'].document)
        window.frames['iframeName'].document.getElementById('lg').prepend('<sapn>我的</sapn>')
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#iframeId {
  width: 100%;
  height: 500px;
}
#iframeId a {
  color: red!important;
}

</style>
