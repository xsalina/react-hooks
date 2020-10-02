// 根据memo我们知道给子组件传值可以解决不必要的重新渲染，
// 但是当给子组件传一个函数的时候，
// 我们就需要给这个函数套上一个useCallback，可以解决重复函数重复渲染的问题
// 用法：useCallback(fun,[]),第一个参数为函数，第二个参数[]可以为空 可以有值（如果不传第二个参数则不起作用）
// 当[]为空， 永远缓存函数，如果[]里面有值，则根绝里面的值变化而重新缓存，否则不变化，
// 可以用来，数组中的某个值发生变化了，然后去重新请求


import React,{useState,useEffect,memo,useCallback} from 'react';
export default (props) => {
    const [name,setName] = useState('salina')
    const [lastName,setlastName] = useState('xxx')
    const clearFun = useCallback(() => {
        setName('')
    },[])

    useEffect(() => {
        console.log(999,'name改变了')
    }, [name])
    return <div>
        <input type="text" value={name} onChange ={(e) => setName(e.target.value)} />
        <input type="text" value={lastName} onChange ={(e) => setlastName(e.target.value)} />

        <ClearValue claerFun={clearFun} />



    </div>
}
export const ClearValue = memo((props) => {
    console.log('子组件渲染了salina')
    const {claerFun} = props
    return <button onClick={claerFun}>点击我清除name</button>
})