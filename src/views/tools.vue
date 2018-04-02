<template>
   <card class="tools">
      <div class="project-item" v-for = "(item, index) in projects" :key="index">
         <a class="project-img" target="_blank" :href="item.link">
           <img :src="'/static/img/' + item.img" >
         </a>
         <div class="project-text" v-if="!item.mobile">{{item.name}}</div>
      </div>
   </card>
</template>

<script>
import card from '@/components/card.vue'
export default {
  name: 'weather',
  components: { card },
  data () {
    return {
      projects: [
        {name: 'Can I use', link: 'https://caniuse.com/', img: 'caniuse1.jpg'},
        {name: '掘金', link: 'https://juejin.im/', img: 'project8.png'}
      ]
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.tools {
  width: calc(100% - 60px)!important;
  height: calc(100vh - 124px);
  margin-top: 16px;
  margin-left: 16px;
  margin-bottom: 16px;
  .g-card-body {
    padding: 16px 16px;
  }
  .project-item {
    display: inline-block;
    margin-right: 32px;
    vertical-align: top;
    position: relative;
  }
  .project-text {
    // position: absolute;
    // top: 16px;
    // left: 16px;
    max-width: 300px;
    text-align: center;
    color: #666;
    margin-top: 8px;
    opacity: .87;
  }
  .project-git {
    font-size: 12px;
    word-break: break-all;
  }
  .project-img {
    display: block;
    vertical-align: top;
    width: 300px;
    height: 160px;
    border-radius: 5px;
    overflow: hidden;
    transition: transform .4s;
    position: relative;
    cursor: pointer;
    &:hover {
      transform: perspective(500px) translate3d(0, -15px, 15px);
      // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
