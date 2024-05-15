// import counter from './store/Counter'
// import cart from './store/Cart'
// observer是一个高阶组件函数，需要包裹一个组件，这样这个组件才会更新（组件变成响应式）
import { observer } from 'mobx-react';
import useStore from './store';
function App() {
  const { counter, cart} = useStore()
  return (
    <div className="App">
      <h3>计数器案例</h3>
      <div>点击次数：{counter.count}</div>
      <div>点击次数*2：{counter.double}</div>
      <div>list:{cart.list}</div>
      <button onClick={counter.increment}>加1</button>
      <button onClick={counter.decrement}>减1</button>
      <button onClick={counter.reset}>重置</button>
    </div>
  );
}

export default observer(App);
