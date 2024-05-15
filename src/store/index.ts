import { createContext, useContext } from "react";
import cart from "./Cart";
import counter from "./Counter";

class RootStore{
    cart = cart
    counter = counter
}

const store = new RootStore()

//创建一个上下文对象，用于跨级组件通讯
//如果createContext提供了默认值，不需要Provider
const Context = createContext(store)

//自定义hooks
export default function useStore(){
    return useContext(Context)
}