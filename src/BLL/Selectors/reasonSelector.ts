import { AppStateType } from "../store";


export const pageSelector=(state:AppStateType):number=>{
    return state.reason.page
}
export const portionSizeSelector=(state:AppStateType)=>{
    return state.reason.portionSize
}
export const reasonsSelector=(state:AppStateType)=>{
    return state.reason.reasons
}
export const portionSizeElementsSelector=(state:AppStateType)=>{
    return state.reason.portionSizeElements
}