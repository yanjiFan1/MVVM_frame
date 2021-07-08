class EventEmitter {
    constructor() {
        this.events = {}
    }
    // 注册
    on(nameSpace, callBack) {
        // 如果注册时不存在nameSpace,则创建新的fn数组
        if (!this.events[nameSpace]) {
            this.events[nameSpace] = [callBack];
        } else {
            // 存在则添加到事件列表中
            this.events[nameSpace].push(callBack);
        }
    }
    // 触发,所有的触发都是由emit来触发的
    emit(nameSpace, ...agr) {
        // 根据nameSpace取出事件列表
        const eventList = this.events[nameSpace];
        // 遍历传入参数执行函数
        eventList && eventList.forEach(fn => fn.apply(this, agr));
    }
    // 将函数添加至事件队列中，但只会执行一次，执行完成后便释放
    once(nameSpace, callBack) {
        const fn = (...arg) => {
            callBack.apply(this, arg);
            this.off(nameSpace, fn);
        }
        this.on(nameSpace, fn);
    }
    // 解绑事件
    off(nameSpace, callBack) {
        if (!this.events[nameSpace]) return;
        // 遍历对应事件列表。比较函数。筛选出其他函数(比较的是函数引用地址)
        this.events[nameSpace] = this.events[nameSpace].filter(item => item !== callBack)
    }
}