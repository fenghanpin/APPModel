// @fengyifan 2019/04/19
// 观察者模式
function Observer() {
  this.eventList = {}
}

Observer.prototype = {
  on(eventName, callback) {
    this.eventList[eventName] = this.eventList[eventName] ? this.eventList[eventName] : null
    callback(this.eventList[eventName])
  },
  emit(eventName, param) {
    this.eventList[eventName] = param
  }
}

export default new Observer()
/* 调用时候
this.$utils.observer.emit(eventName, 参数值)
this.$utils.observer.on(eventName, callback)
*/
/* function Observer() {
    this.eventList = {}
}
Observer.prototype = {
    on(eventName, callback) {
        this.eventList[eventName] = this.eventList[eventName] ? this.eventList[eventName] : [];
        this.eventList[eventName].push(callback)
    },
    emit(eventName, param) {
        if (this.eventList[eventName]) {
            this.eventList[eventName].forEach((value, index) => {
                value(param)
            })
        }
    },
    off(eventName) {
        this.eventList[eventName] = []
    }
} */
