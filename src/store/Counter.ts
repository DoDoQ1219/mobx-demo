import { action, autorun, computed, makeAutoObservable, makeObservable, observable, reaction } from 'mobx'
class Counter{
    constructor(){
        // //参数1： target 把谁变成响应式（可观察）
        // //参数2： 指定哪些属性或方法变成可观察
        // makeObservable(this, {
        //     count: observable,
        //     increment: action.bound,
        //     decrement: action.bound,
        //     reset: action.bound,
        //     double: computed
        // })
        //参数1： target 让哪个对象变成可观察
        //参数2： 排除属性和方法
        //参数3： 指定自动绑定this
        makeAutoObservable(this, {decrement: false}, {autoBind: true})
    }
    count = 0
    increment(){
        this.count++
    }
    decrement(){
        this.count--
    }
    reset(){
        this.count = 0
    }
    get double(){
        return this.count * 2
    }
}

let myCounter = new Counter()

// autorun(() => {
//     console.log('counter', myCounter.count)
//     console.log('double', myCounter.double)
// })

reaction(() => myCounter.count, (value, oldValue) => {console.log('count发生了变化',value, oldValue)})

export default myCounter;