// 实现一个全屏的功能
import { NotifyTimer } from './notifyTimer'
import * as utils from './utils'

let fullScreen = {
  dom: '',
  fullScreenSet (ele) {
    let element = ele || this.dom
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen()
    }
  },
  cancelFullScreen () {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  },
  // 一个锁屏弹幕，初始化参数{dom， str}
  initLockScreen (str) {
    let div = document.createElement('div')
    div.classList.add('danmu')
    let child = document.createElement('div')
    child.classList.add('danmu-text')
    child.innerText = str
    div.appendChild(child)
    document.body.appendChild(div)
    this.dom = div
    return this
  }
}
export { utils, fullScreen, NotifyTimer }
