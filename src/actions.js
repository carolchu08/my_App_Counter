import {INCREASE, DECREASE,UPDATE_SIZE,RESET_NUM} from "./actionTypes";
export const increaseSum = () =>{
return {type: INCREASE}
}
export const decreaseSum = ()=>{
    return {type:DECREASE}
}
export const updateSize = (newSize) =>{
    return {type:UPDATE_SIZE, payload:newSize}
}
export const resetNum = () =>{
    return {type:RESET_NUM}
}