/*
 * @Date: 2020-09-25 22:23:31
 * @Autor: 肖月萍
 * @Description: Do not edit
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-10-02 13:40:59
 */
import React,{useState,useEffect} from 'react';
import {Consumer} from '../App.js'
 export default (props) => {
    const{count} = props
    return <Consumer>
       { ({context,setContext}) => 
            <div>
            <div>子组件的值{context}</div>
            <button onClick={() =>setContext('已修改父组件的值')}>点击我修改父组件的值</button>
            <div>{count}</div>
        </div>
       }
    </Consumer>
    
}
