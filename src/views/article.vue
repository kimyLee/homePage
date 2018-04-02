<template>
   <div class="article">
      <div class="article-item" v-for="(item, $index) in articles" :key="$index" @click="jumpDetail($index)">
        <p class="small-title"><span class="author">kimmy</span>&nbsp;&nbsp;25min之前&nbsp;&nbsp;HTTP/浏览器
        <i class="el-icon-view show-view" ></i>
        </p>
        <p class="article-title">{{item}}</p>
        <p><span class="task-tag">重点</span></p>
      </div>
      <!-- <div class="article-item">
        <p class="small-title"><span class="author">kimmy</span>&nbsp;&nbsp;25min之前&nbsp;&nbsp;HTTP/浏览器
        <i class="el-icon-view show-view" ></i>
        </p>
        <p class="article-title">我需要知道的HTTP和HTTPS</p>
        <p><span class="task-tag">重点</span></p>
      </div>
      <div class="article-item">
        <p class="small-title"><span class="author">kimmy</span>&nbsp;&nbsp;25min之前&nbsp;&nbsp;HTTP/浏览器
        <i class="el-icon-view show-view" ></i>
        </p>
        <p class="article-title">我需要知道的HTTP和HTTPS</p>
        <p><span class="task-tag">重点</span></p>
      </div> -->
   </div>
</template>

<script>
import card from '@/components/card.vue'
export default {
  name: 'weather',
  components: { card },
  data () {
    return {
      articles: [
        {title: 'https, http'},
        {title: '跨域的几种解决方案'},
        {title: '深入理解快速排序'}
      ]
    }
  },
  methods: {
    getArtical () {
      this.articles = JSON.parse(localStorage.getItem('articles') || '[]') || this.articles
    },
    // 文章详情
    jumpDetail (id) {
      this.$router.push({name: 'articleEdit', query: {id}})
    }
  },
  mounted () {
    this.getArtical()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.article {
  width: 1000px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  min-height: calc(100vh - 100px);
  background: #fff;
  margin-top: 16px;
  margin-left: 16px;
  margin-bottom: 16px;
  .article-item {
    width: 100%;
    padding: 8px 16px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .show-view {
      float: right;
      font-size: 24px;
      color: #21a0f2;
      opacity: .4;
      display: none;
    }
    &:hover {
      background: rgba(235,  238, 245, .37);
       .show-view {
        display: inline-block;
      }
    }
    .small-title {
      color: #ccc;
      font-size: 12px;
    }
    .author {
      color: #444;
    }
    .article-title {
      font-weight: bold;
    }
    .task-tag {
      padding-left: 12px;
      position: relative;
      color: #666;
      font-size: 14px;
      margin-right: 6px;
      &:before {
        content: '';
        position: absolute;
        background-color: #21a0f2;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        top: 4px;
        left: 0;
      }
    }

  }
}
</style>
