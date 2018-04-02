<template>
  <div id="app">
    <app-header></app-header>
    <app-sider></app-sider>
    <div style="padding-left: 80px; padding-top: 60px;">
      <router-view/>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/header.vue'
import appSider from '@/components/sider.vue'
export default {
  name: 'App',
  components: { appHeader, appSider }
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
