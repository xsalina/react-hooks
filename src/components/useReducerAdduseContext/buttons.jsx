import React,{useContext,useEffect} from 'react';
import {ColorContext,UPDATE_COLOR} from './father'
export default (props) => {
    const {dispatch} = useContext(ColorContext)
    return <div style={{display:'flex'}}>
        <button onClick={() => dispatch({type:UPDATE_COLOR,color:'yellow'})}>黄色的按钮</button>
        <button onClick={() => dispatch({type:UPDATE_COLOR,color:'blue'})}>蓝色的按钮</button>
        <button onClick={() => dispatch({type:UPDATE_COLOR,color:'red'})}>红色的按钮</button>
    </div>
}