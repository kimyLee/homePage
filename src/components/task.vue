<template>
  <div class="g-card" :style="{width: width + 'px'}">
    <div class="g-card-header">
        <span class="title-left">{{title || '示例'}}</span>
        <span class="title-right">
          <ul class="menu-list">
           <li class="menu-list-item"
              v-for="(item, index) in menus"
              :key="index"
              @click="item.cb">
              <i v-if="item.icon" class="list-item-icon" :class="item.icon"></i>
              <span class="list-item-text">{{item.title}}</span>
           </li>
         </ul>
        </span>
    </div>
    <div class="g-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    'title': String,
    'menus': Array,
    'width': {
      type: [String, Number],
      default: 1000
    }
  },
  data () {
    return {
      // menus: [
      //   {
      //     title: '工具',
      //     icon: 'el-icon-plus',
      //     cb () {
      //       alert('click!')
      //     }
      //   },
      //   {
      //     title: '创建',
      //     cb () {
      //       alert('click2!')
      //     }
      //   }
      // ]
    }
  },
  mounted () {
    this.$nextTick(() => {
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.g-card {
  padding: 16px;
  width: 400px;
  background: #fff;
  border-radius: 4px;
  .g-card-header {
    border-bottom: 1px solid #eee;
    overflow: hidden;
    height: 30px;
  }
  .title-left {
    float: left;
    line-height: 30px;
  }
  .title-right {
    float: right;
  }
  .menu-list {
      margin: 0;
      list-style-type: none;
      .menu-list-item{
        font-size: 16px;
        margin-left: 8px;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
      }
      .list-item-icon {
        margin-right: 2px;
      }
  }
  .g-card-body {
    padding: 8px 0;
  }
}

</style>
