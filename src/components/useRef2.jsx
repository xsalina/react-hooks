import React,{
    useState,
    Fragment,
    useEffect,
    forwardRef,
    useImperativeHandle,
  } from 'react';

  
//   子组件给父组件传值
// ①首先在父组件内部创建 useRef（const fatherRef = useRef（））
// ②然后通过ref = fatherRef  传给子组件
// ③子组件导出的时候使用forwardRef（ export default forwardRef（Children）），
// ④子组件接收ref和props同级（（props，ref）），
// ⑤然后使用useImperativeHandle(ref,( ) => ({     
//                                       count,
//                                       methods:子组件的方法
//                             })


 const Children =(props,ref) => {
    const [count,setCount] = useState(0)
    const innerMethod = () => {
        console.log('子组件的方法')
      }
      useImperativeHandle(ref, () => ({
        method: innerMethod,
        count
      }));

    return <div>
        <div>{count}</div>
        <button onClick={() =>setCount(count + 1)}>子组件的count</button>
    </div>
}

export default forwardRef(Children);