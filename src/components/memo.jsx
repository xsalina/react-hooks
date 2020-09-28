import React,{useState,useEffect,memo} from 'react';
export default () => {
    const [userInfo,setUserInfo] = useState({
        name:'joh',
        lastName:'salina'
    })
    const [count,setCount] = useState(0)
    return (
        <div>
            <ChildCom userInfo={userInfo} />
            
            <input type="text" value={userInfo.name} onChange ={(e) => setUserInfo({
                ...userInfo,
                name:e.target.value
            })} />
             <input type="text" value={userInfo.lastName} onChange ={(e) => setUserInfo({
                ...userInfo,
                lastName:e.target.value
            })} />

            <div>{count}</div>
            <div onClick={() => setCount(7)}>点击我我就增加了</div>
        </div>
    )
}

//memo可用于子组件，子组件传过来的值如果在父组件发生变化了，才会渲染，
//如果没有发生变化则不会渲染。就把这个组件放入memo函数内就可以了  memo(childrenComponent)
export const ChildCom = memo(
    (props) => {
        console.log('子组件渲染了',props)
        const {userInfo:{name,lastName}} = props
        // const {name,lastName} = props;
        return (
        <div>{name}{lastName}</div>
        // <div></div>
        )
    }
)