/*
 * @Date: 2020-10-08 22:31:34
 * @Autor: 肖月萍
 * @Description: Do not edit
 * @LastEditors: 肖月萍
 * @LastEditTime: 2020-10-08 22:43:40
 */
import React,{useState,useEffect,memo,useCallback} from 'react';
 function useWindow (){
     const [size,setSize] = useState({
         width:document.documentElement.clientWidth,
         height:document.documentElement.clientHeight,
     })

     const onSize = useCallback(() => {
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight,
        })
     },[])
     
     useEffect(() => {
         window.addEventListener('resize',onSize)
         return () => {
             window.removeEventListener('resize',onSize)
         }
     },[])
     return size
 }

 export default () => {
     const {width,height} = useWindow()
    return <div>屏幕大小：{width} X {height}</div>
 }
