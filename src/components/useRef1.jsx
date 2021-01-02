import React,{useState,useEffect,useRef} from 'react';
export default (props) => {

    const [isWidth,setIsWidth] = useState('点击按钮获取容器宽度')
    const contariner = useRef(null)
    const changeValue = () => {
        setIsWidth(`容器宽度为${contariner.current.clientWidth}px`)
    }
    return <div className='container' ref={contariner}>
        <h3>{isWidth}</h3>
        <button onClick={() => changeValue()}>点击按钮获取容器宽度</button>
        
    </div>
}