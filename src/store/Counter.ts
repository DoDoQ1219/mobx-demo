import { action, autorun, computed, configure, makeAutoObservable, makeObservable, observable, reaction, runInAction } from 'mobx'

// configure({
//     enforceActions: 'observed'
// })
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
        makeAutoObservable(this, {}, {autoBind: true})
    }
    sum = 0
    count = 0
    increment(){
        setTimeout(() => {
            runInAction(() => {
                this.count++
            })
        }, 1000);
    }
    // incrementAsync(){
    //     setTimeout(this.increment, 1000);
    // }
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

const counter = new Counter()

//监听属性
autorun(() => {
    console.log('count', counter.count)
})
//监听属性
autorun(() => {
    console.log('sum',counter.sum)
})
//监听属性
reaction(() => counter.count, (value, oldValue) => {console.log('count发生了变化',value, oldValue)})

export default counter;