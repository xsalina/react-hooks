import React,{useState,useEffect,useRef,useContext} from 'react';
export default (props) => {
    const [count,setCount] = useState(0)
    const [state,setState] =useState('init state')
    const useCountRef = useRef(count)
    // []她只是保存了第一次的值，所以这里2秒之后的count还是0，这就要使用useRef
    useEffect(() => {
        setTimeout(() => {
            setCount(1)
            useCountRef.current = 1
        },1000)
        setTimeout(() => setState(`init state ${useCountRef.current}`),2000)
    },[])
    return <div>
        <h3>{count}</h3>
        <h4>{state}</h4>
    </div>
}