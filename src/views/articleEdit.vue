<template>
   <div class="article-edit">
      <div style="width: 100%;height: 40px;position: relative;overflow: hidden;">
        <input type="text" class="article-title" v-model="title" @input='saveTitle'/>
      </div>
      <div id="editor">
        <textarea :value="input" @input="update"></textarea>
        <div v-html="compiledMarkdown"></div>
      </div>
   </div>
</template>

<script>
import card from '@/components/card.vue'
import './js/marked.js'
export default {
  name: 'weather',
  components: { card },
  data () {
    return {
      id: '',
      timer: '',
      input: '# hello',
      title: '',
      articles: [],          // 文章总数组
      articleContents: []    // 内容总数组
      // articles: [
      //   {name: 'Can I use', link: 'https://caniuse.com/', img: 'caniuse1.jpg'},
      //   {name: '掘金', link: 'https://juejin.im/', img: 'project8.png'}
      // ]
    }
  },
  computed: {
    compiledMarkdown () {
      return window.marked(this.input, { sanitize: true })
    }
  },
  watch: {
    'route' () {
      this.init()
    }
  },
  methods: {
    init () {
      this.id = this.$route.query.id - 0
      this.getArticleDetail()
    },
    getArticleDetail () {
      this.articles = JSON.parse(localStorage.getItem('articles') || '[]')
      this.articlesDetail = JSON.parse(localStorage.getItem('articlesDetail') || '[]')
      this.title = this.articles[this.id]
      this.input = this.articlesDetail[this.id]
    },
    saveArticleDetail () {
      this.articles[this.id] = this.title
      this.articlesDetail[this.id] = this.input
      localStorage.setItem('articles', JSON.stringify(this.articles))
      localStorage.setItem('articlesDetail', JSON.stringify(this.articlesDetail))
    },
    saveTitle () {
      clearInterval(this.timer)
      this.timer = setTimeout(() => {
        this.saveArticleDetail()
      }, 300)
    },
    update (e) {
      let $target = e.target
      clearInterval(this.timer)
      this.timer = setTimeout(() => {
        this.input = $target.value
        this.saveArticleDetail()
      }, 300)
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.article-edit {
  width: 1600px;
  left: 50%;
  margin-top: 16px;
  transform: translateX(-50%);
  min-height: calc(100vh - 100px);
  position: relative;
  .article-title {
    position: absolute;
    display: inline-block;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    width: 500px;
    left: 0;
    right: 0;
    bottom: 8px;
    margin: 0 auto;
    vertical-align: bottom;
    background: none;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
  }
    textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 100%;
    min-height: calc(100vh - 100px);
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
    background: #fff;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    min-height: calc(100vh - 100px);
    resize: none;
    outline: none;
    background-color: #fefefe;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }
}
</style>
