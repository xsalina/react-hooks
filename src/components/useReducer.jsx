import React,{useReducer,memo} from 'react'

const reducer =(states,action) =>{
    const {type,payload} = action;
    switch(type){
        case'addName':
        return {
            ...states,
            name:payload
        }

        case 'reduceName':
            return{
                ...states,
                name:payload
            }
            default:
                return{...states}
    }

}

export default() => {
    const [state, dispatch] = useReducer(reducer, {name:'初始值名字'})
    console.log(state,dispatch)
    return (
        <div>
           
           <input type="text" value={state.name} onChange={(e) => dispatch({type:'addName',payload:e.target.value})} />
            <ChildrenCom state={state} dispatch={dispatch} />
        </div>
    )
}

export const ChildrenCom = memo((props) => {

    const {state,dispatch} = props;
    return(
        <>
        <div>我是子组件，我要触发父组件的action</div>
        <input type="text" value={state.name} onChange={(e) => dispatch({type:'reduceName',payload:e.target.value})} />
        </>
    )
})