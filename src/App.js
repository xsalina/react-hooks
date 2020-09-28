/*
 * @Date: 2020-09-25 22:23:31
 * @Autor: 肖月萍
 * @Description: Do not edit
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-09-28 22:11:54
 */
import React,{useState,useEffect} from 'react';
import Hooks from './components/hooks'
import DidUpdate from './components/didUpdate.jsx'
import Memo from './components/memo'
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const [showHooks,setShowHooks] = useState(true)
  useEffect(() => {
    console.log('生命周期DidMount')
  }, [])

  useEffect(() => {
      if(count > 10){
        console.log('监听count大于了10，相当于shouldComponentUpdate')
      }
  }, [count])

  useEffect(() => {
    return () => {
      console.log('我是子组件，我被摧毁了   执行 销毁函数')
    }
  }, [showHooks])

  return (
    <div className="App">
      <header className="App-header">
          <button onClick={()=> setCount (count - 1)}>减去</button>
          <button onClick={()=> setCount (count + 1)}>加上</button>
          <div>you click {count} times</div>
          <div onClick={() => setShowHooks(false)}>点击销毁子组件le</div>
          
        {showHooks && <Hooks count={count} />}
        <DidUpdate />
        <Memo />
      </header>
    </div>
  );
}

export default App;
