/*
 * @Date: 2020-09-25 22:23:31
 * @Autor: 肖月萍
 * @Description: Do not edit
 * @,@LastEditors: ,: 肖月萍
 * @,@LastEditTime: ,: 2020-12-29 22:13:41
 */
import React,{useState,useEffect} from 'react';
import Hooks from './components/hooks'
import DidUpdate from './components/didUpdate.jsx'
import Memo from './components/memo'
import Memo1 from './components/memo1'
import UseCallBack from './components/userCallback'
import UseReducer from './components/useReducer'
import UseContext,{ChildrenContext} from'./components/useContext'
import UseRef from'./components/useRef'
import UseRef1 from'./components/useRef1'
import UserReducerAddUseContext from './components/useReducerAdduseContext'
import Window from './components/window'
import './App.css';

export const {Provider,Consumer} = React.createContext('')
function App() {
  const [context,setContext] = useState('i  am new Context');
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
  console.log(2347238)
  useEffect(() => {
    return () => {
      console.log('我是子组件，我被摧毁了   执行 销毁函数')
    }
  }, [showHooks])

  return (
    <Provider  value={{context,setContext}}>

    <div className="App">
    
      <header className="App-header">
      {/* <div>父组件的值77777777{context}</div>
          <button onClick={()=> setCount (count - 1)}>减去</button>
          <button onClick={()=> setCount (count + 1)}>加上</button>
          <div>you click {count} times</div>
          <div onClick={() => setShowHooks(false)}>点击销毁子组件le</div>

          
          
        {showHooks && <Hooks count={count} />} */}
        {/* <DidUpdate />
        <Memo />

        <UseCallBack />
        

        <hr />
        <UseReducer /> */}
        <UseRef />
        <UseRef1 />
        <Memo1 />
        <UserReducerAddUseContext />
        <Window />
      </header>
      <hr />
      
    </div>
    </Provider>
  );
}

export default App;
