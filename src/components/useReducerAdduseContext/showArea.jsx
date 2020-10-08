import React,{useState,useEffect,useContext} from 'react';
import {ColorContext} from './father'

export default (props) => {
    const {color} = useContext(ColorContext);
    return <div>
       <p style={{color:color}}>字体的颜色为{color}</p>
    </div>
}