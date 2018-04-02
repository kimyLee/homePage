<template>
  <div class="header">
      <span class="more-btn">
       <el-popover
        placement="bottom-start"
        :visible-arrow="false"
        width="200"
        trigger="hover"
        popper-class="header-setting"
       >
       <div>
         <ul class="menu-list">
           <li class="menu-list-item"><i class="el-icon-setting list-item-icon"></i>个人设置</li>
           <li class="menu-list-item" ><i class="el-icon-menu list-item-icon"></i>快捷键</li>
           <li class="menu-list-item"><i class="el-icon-view list-item-icon"></i>更换主题</li>
         </ul>
       </div>
        <span slot="reference" class="head-img">
          <img :src="headUrl"/>
        </span>
      </el-popover>

      </span>
      <span class="header-item">{{username}} </span>
      <span class="header-item search-panel" @click.stop="toggleInput()">
        <el-input
          placeholder="在全部中搜索"
          suffix-icon="el-icon-search"
          v-model="input"
          @blur="toggleInput(true)"
          >
        </el-input>
      </span>
    <!--</div>-->
    <!-- <span class="login-user">6666</span> -->
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
  .header-setting {
    padding: 0;
    // 下拉菜单
    .menu-list {
      margin: 0;
      padding: 8px 0;
      list-style-type: none;
      .menu-list-item{
        padding: 4px 8px;
        height: 30px;
        line-height: 30px;
        &:hover {
          background: #eee;
        }
      }
      .list-item-icon {
        margin-right: 8px;
        font-size: 20px;
        vertical-align: middle;
      }
    }
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /*display: flex;*/
    justify-content: space-between;
    height: 60px;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1);
    // 头像
    .head-img {
      width: 40px;
      height: 40px;
      display: inline-block;
      border-radius: 50%;
      overflow: hidden;
      text-align: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login-user {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      float: right;
      cursor: pointer;
    }
    &:after{
      display: inline-block;
      content: '';
      height: 100%;
      width: 0;
      vertical-align: middle;
    }
    .more-btn {
      font-size: 16px;
      display: inline-block;
      vertical-align: middle;
      cursor:pointer;
    }
    .header-item{
      vertical-align: middle;
    }
    .search-panel {
      display: inline-block;
      margin-left: 20px;
      width: 150px;
      transition: width .3s ease;
      .el-input{
        .el-input__inner{
          outline: none;
          height: 32px;
          border-radius: 16px;
        }
        .el-input__icon{
          line-height: 32px;
        }
      }
      outline: none;
    }
  }
</style>
