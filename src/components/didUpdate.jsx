import React,{useState,useEffect} from 'react';

//是否更新，很多变量更新要做操作的话，可以使用useEffect。
export default (props) => {
    const [userName,setUserName] = useState('user')
    const [lastName,setLastName] = useState('last')
    // useEffect(() => {
    //     console.log('组件已挂在')
    //     return () => {
    //         console.log('组件已卸载')
    //     }
    // },[userName,lastName])

    useEffect(() => {
        console.log('组件挂在')
        return () => {
            console.log('组件卸载')
        }
    })
    return(
        <div>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
    )
}