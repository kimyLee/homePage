<template>
  <div>
    <div class="myhover" v-if="isOpen" @click="close"></div>
    <div class="rightSide" :class="{open: isOpen}" :style="{width: width + 'px'}">
      <div class="head">
        <slot name="head"></slot>
        <span class="close" @click="close"><i class="el-icon-close" ></i></span>
      </div>
      <div class="body" :class="bodyClass">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    bodyClass: String,
    width: [Number, String]
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  .myhover {
    cursor: pointer;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 98;
    /*background-color: rgba(0, 0, 0, .1);*/
  }

  .rightSide {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    transform: translate3d(100%, 0, 0);
    z-index: 99;
    background-color: #fff;
    transition: all ease .3s;
    overflow: hidden;
    &.open {
      transform: translate3d(0, 0, 0);
      box-shadow: -5px 0 40px #d6d6d6;
    }
    .head {
      height: 60px;
      line-height: 60px;
      vertical-align: middle;
      padding: 0 20px;
      overflow: hidden;

      .close {
        display: inline-block;
        // float: right;
        position: absolute;
        top: 0;
        right: 16px;
        cursor: pointer;
      }
    }
    .body {
      background-color: #f1f1f1;
      padding: 20px;
      box-sizing: border-box;
      height: calc(100% - 30px);
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
</style>
