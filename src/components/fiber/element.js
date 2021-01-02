/*
 * @,@Date: ,: 2021-01-02 16:08:06
 * @,@Autor: ,: 肖月萍
 * @,@Description: ,: Do not edit
 * @,@LastEditors: ,: 肖月萍
 * @,@LastEditTime: ,: 2021-01-02 16:27:39
 */
let A1 = {type:'div',key:'A1'};
let B1 = {type:'div',key:'B1',return:'A1'};
let B2 = {type:'div',key:'B2',return:'A1'};
let C1 = {type:'div',key:'C1',return:'B1'};
let C2 = {type:'div',key:'C2',return:'B1'};
A1.child = B1;
B1.child = C1;
B1.sibling = B2;
C1.sibling = C2;
module.export = A1;

