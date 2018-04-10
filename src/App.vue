<template>
  <div id="app">
    <!-- 主体内容 -->
    <app-header @login="showLogin = true"></app-header>
    <app-sider></app-sider>
    <div style="padding-left: 80px; padding-top: 60px;">
      <router-view/>
    </div>
    <!-- 登陆弹窗 -->
    <el-dialog title="登陆" :visible.sync="showLogin" custom-class="login-form" :close-on-click-modal="false">
      <div>
        <div class="create-task-item">
          <span style="display: inlin-block;">用户名：</span>
          <el-input
            style="display: inline-block;width: 90%;"
            placeholder="请输入用户名"
            v-model="userinfo.name">
          </el-input>
        </div>
        <div class="create-task-item">
          <span style="display: inlin-block;">密码：</span>
          <el-input
            style="display: inline-block;width: 90%;"
            placeholder="请输入密码"
            v-model="userinfo.pwd">
          </el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showLogin = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import appHeader from '@/components/header.vue'
import appSider from '@/components/sider.vue'
export default {
  name: 'App',
  components: { appHeader, appSider },
  data () {
    return {
      showLogin: false,
      userinfo: {
        name: '',
        pwd: ''
      }
    }
  }
}
</script>

<style>
 html, body,ul, div {
    margin: 0;
    padding: 0;
  }
  body {
    background: #F7F6F2;
  }
  #app {
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  }
  textarea input button {
    outline:none;
  }
  a {
    text-decoration: none;
  }
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width: 8px;
    height: 8px;
    background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px #ccc;
    border-radius: 8px;
    background-color: #F5F5F5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 6px #ccc;
    background-color: #ccc;
}
</style>
