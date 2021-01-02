/*
 * @,@Date: ,: 2021-01-02 16:16:31
 * @,@Autor: ,: 肖月萍
 * @,@Description: ,: Do not edit
 * @,@LastEditors: ,: 肖月萍
 * @,@LastEditTime: ,: 2021-01-02 17:39:16
 */
//fiber树   优先级更新顺序： 儿子 > sibling > 叔叔
let A1 = {type:'div',key:'A1'};
let B1 = {type:'div',key:'B1',return:A1};
let B2 = {type:'div',key:'B2',return:A1};
let C1 = {type:'div',key:'C1',return:B1};
let C2 = {type:'div',key:'C2',return:B1};
A1.child = B1;
B1.child = C1;
B1.sibling = B2;
C1.sibling = C2;








let nextUnitOfWork = null;

function workLoop(){
    while(nextUnitOfWork){
        nextUnitOfWork = PerformUntilOfWork(nextUnitOfWork);
    }
    if(!nextUnitOfWork){
        console.log('render结束了',)
    }

}

function PerformUntilOfWork(fiber){//A1 B1 C1
    beginWork(fiber)
    if(fiber.child){//如果有儿子，先返回儿子
        return fiber.child;
    }
    
    while(fiber){
        completeUntiOfWork(fiber)
        if(fiber.sibling){
            return fiber.sibling;
        }
        fiber = fiber.return;
    }
   
    
    
}
function completeUntiOfWork(fiber){
    console.log('结束',fiber.key)

}
function beginWork(fiber){//A1 B1 C1
    console.log('开始',fiber.key)
}

nextUnitOfWork = A1;
workLoop()


/**
 * vue把每个更新任务分割的足够小，vue模块 watch组件更新 更新范围很小，是组件型的更新，不需要fiber
 * React任务还是很大，但是分割成多个小人任务，可以中断和恢复健康，不阻塞主进程执行高优先级任务。不管在那里调setState，都是从根节点开始比较更新
 * 
 */

//A1开始 => B1开始 => C1开始 => C1结束 => C2开始 => C2结束 => B1开始 => B2开始  => B2结束 => A1结束
