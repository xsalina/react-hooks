import React,{useState,useEffect,useRef,memo} from 'react';
export default (props) => {
    const [leval,setLeval] = useState(0)
    return <>
    <hr />
    <h4>{leval}</h4>
    <input 
    type="range"
    min='0'
    max='500'
    value={leval}
    onChange={e => setLeval(+e.target.value)}

    />
    <ChildMemoChild leval={leval} />
    </>

}

const methodsValue = value => {
    if(value <= 100)return '哭泣'
    if(value <= 200)return '平淡'
    if(value <= 300)return '微笑'
    if(value <= 400)return '开心'
    if(value <= 500)return '笑'
}
//memo的第二个参数是一个函数 ，返回true的话就是不会重新渲染ChildMemoChild
const isEqually = (preprops,nextProps) => {
    const preValue = methodsValue(preprops.leval);
    const nextValue = methodsValue(nextProps.leval);

    return preValue === nextValue
}

export const ChildMemoChild = memo( props => {
    const {leval} =props
    return <div>
        <h3>我的等级为{leval}</h3>
        <h4>我的心情是<em>{methodsValue(leval)}</em></h4>
    </div>
},isEqually)