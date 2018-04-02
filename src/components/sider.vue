<template>
  <div class="sider">
    <div>
       <ul class="menu-list">
           <li class="menu-list-item">
             <router-link to="/" exact>
               <i class="el-icon-menu list-item-icon"></i><span class="list-item-text">项目</span>
              </router-link>
            </li>
           <li class="menu-list-item">
             <router-link to="tools">
               <i class="el-icon-mobile-phone list-item-icon"></i><span class="list-item-text">工具</span>
              </router-link>
            </li>
           <li class="menu-list-item">
             <router-link to="article">
               <i class="el-icon-document list-item-icon"></i><span class="list-item-text">文档</span>
              </router-link>
            </li>
         </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import myDropDown from '../myDropDown.vue'
export default {
  // props: ['info'],
  data () {
    return {
      headUrl: '/static/img/head.jpg',
      username: 'kimmy又叫夏小川',
      input: '',
      focus: false
    }
  },
  // components: { myDropDown },
  methods: {
    toggleInput (isBlur) {
      const $target = this.$el.querySelector('.search-panel')
      $target.style.width = isBlur ? '150px' : '200px'
    },
    handleIconClick () {
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  .sider {
    position: fixed;
    top: 60px;
    height: calc(100vh - 60px);
    width: 80px;
    background: rgba(60,60,60,1);
    // position: relative;
    .menu-list {
      margin: 0;
      padding: 0;
      position: absolute;
      width: 100%;
      left: 0;
      top: 10%;
      list-style-type: none;
      .router-link-active {
        background: rgba(255,255,255,.1);
      }
      .menu-list-item{
        display:flex;
        flex-wrap: wrap;
        text-align: center;
        align-content: center;
        width: 100%;
        height: 80px;
        color: #fcfcfc;
        font-size: 16px;
        line-height: 80px;
        cursor: pointer;
        &:hover {
          // color: rgba(60,60,60,1);
          background: rgba(255,255,255,.1);
        }
        a {
          color: #fff;
          text-align: center;
          width: 100%;
          display:flex;
          flex-wrap: wrap;
          text-align: center;
          align-content: center;
        }
      }
      .list-item-icon {
        display: block;
        width: 100%;
        font-size: 28px;
        vertical-align: middle;
        opacity: .64;
      }
      .list-item-text {
        display: block;
        width: 100%;
        height: 24px;
        line-height: 24px;
        opacity: .64;
      }
    }
  }
</style>
