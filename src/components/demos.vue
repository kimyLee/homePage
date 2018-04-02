<template>
   <card title="实验室" class="demos">
      <div class="project-item" v-for = "(item, index) in projects" :key="index">
         <a class="project-img" target="_blank" :href="item.link">
           <img :src="'/static/img/' + item.img" >
         </a>
         <div class="project-text" v-if="!item.mobile">{{item.name}}</div>
         <el-popover
            v-if="item.mobile"
            placement="right"
            width="200"
            trigger="hover"
          >
            <img style="width: 180px;" :src="'/static/img/' + item.code">
            <div slot="reference" class="project-text" style="cursor: pointer">
              {{item.name}}<i class="el-icon-question" style="margin-left: 4px;"></i>
              </div>
          </el-popover>
         <div class="project-text project-git">{{item.git}}</div>
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
        {name: '这个项目', img: 'project1.png', link: '#', git: 'https://github.com/kimyLee/homePage'},
        {name: '个人助手（移动端）', mobile: true, code: 'code.png', img: 'project2.png', link: 'http://kimy.coding.me/vue-assistant/#/', git: 'https://github.com/sxzy/vue-assistant'},
        {name: 'threejs 实验室', img: 'plane.png', link: 'http://kimy.coding.me/webglDemos/#/plane', git: 'https://github.com/kimyLee/webglStudy'},
        {name: '冰壶挑战', mobile: true, code: 'binghu.png', img: 'project3.png', link: 'https://kimylee.github.io/binghutiaozhan/#/', git: 'https://github.com/kimyLee/binghutiaozhan'},
        {name: '文字表情', mobile: true, code: 'emoji.png', img: 'project4.png', link: 'https://kimylee.github.io/emoji/', git: 'https://github.com/kimyLee/emoji'},
        {name: 'canvas 实验室', mobile: true, code: 'rungirl.png', img: 'project5.png', link: 'https://kimylee.github.io/running-girl/runningGirl.html', git: 'https://github.com/kimyLee/running-girl/tree/master'}
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
.demos {
  width: calc(100% - 60px)!important;
  margin-top: 16px;
  margin-left: 16px;
  margin-bottom: 16px;
  .g-card-body {
    padding: 16px 16px;
  }
  .project-item {
    display: inline-block;
    margin-right: 16px;
    vertical-align: top;
  }
  .project-text {
    max-width: 180px;
    text-align: center;
    color: #444;
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
    width: 180px;
    height: 180px;
    border-radius: 5px;
    overflow: hidden;
    transition: transform .4s;
    position: relative;
    cursor: pointer;
    &:hover {
      transform: perspective(500px) translate3d(0, -15px, 15px);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
