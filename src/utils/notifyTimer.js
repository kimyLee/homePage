import utils from './utils'
// 定义这个类
class NotifyTimer {
  constructor (second = 300, title) {
    this.seconds = second
    this.notifity = ''                    // notify对象
    this.timer = ''                       // 倒计时计时器
    this.myKey = ''                       // 标志触发close是否是计时触发，不是的话说明为手动，要删除当前对象
    this.seconds = second
    this.option = {
      body: title || '开始一个番茄时间，休息一会后继续哦',
      renotify: 'true',
      tag: 'myTime',
      icon: '/static/img/head.jpg'
    }
    this.initNotice()
  }
  initNotice () {
    let carryFn = () => {
      this.notifity = new Notification('start', this.option)
      this.startTimer()
    }
    // 先检查浏览器是否支持
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification')
    } else if (Notification.permission === 'granted') {
      carryFn()
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // 如果用户同意，就可以向他们发送通知
        if (permission === 'granted') {
          carryFn()
        }
      })
    }
  }
  startTimer () {
    if (this.seconds && this.notifity) {
      this.timer = setTimeout(() => {
        this.myKey = true
        this.notifity = new Notification(`${utils.padNumber((this.seconds / 60) >> 0, 2)}:${utils.padNumber(this.seconds % 60, 2)}`, this.option)
        this.notifity.addEventListener('close', (e) => {
          if (!this.myKey) {
            clearTimeout(this.timer)
            this.notifity = null
          }
        })
        setTimeout(() => {
          this.myKey = false
        }, 100)
        this.seconds--
        this.startTimer()
      }, 1000)
    }
  }
}
export { NotifyTimer }
