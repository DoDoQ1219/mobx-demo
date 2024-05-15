import { makeAutoObservable } from "mobx"

class Cart{
    constructor(){
        makeAutoObservable(this,{},{autoBind: true})
    }
    list = [1,2,3]
}
const cart = new Cart()
export default cart