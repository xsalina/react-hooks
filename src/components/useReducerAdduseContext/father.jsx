import React,{useReducer,useEffect,createContext} from 'react';


//定义reducer的type类型
export const UPDATE_COLOR = 'UPDATE_COLOR'

//reducer函数
const reducer = (state,action) => {
    const{type,color} = action;
    switch(type){
        case UPDATE_COLOR:
            return color
            default:
                return state
    }
}

//创建ColorContext上下文
export const ColorContext = createContext({})

//创建上下文的父组件和color颜色和派发器，并传递给子组件。
export const ColorContextCom = (props) => {
    const [color,dispatch] = useReducer(reducer,'yellow')
    return <ColorContext.Provider value={{color,dispatch}}> 
        {props.children}
    </ColorContext.Provider>
}