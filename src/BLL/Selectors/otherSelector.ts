import { AppStateType } from "../store";


export const pageSelector=(state:AppStateType):number=>{
    return state.other.page
}
export const portionSizeSelector=(state:AppStateType)=>{
    return state.other.portionSize
}
export const othersSelector=(state:AppStateType)=>{
    return state.other.others
}
export const portionSizeElementsSelector=(state:AppStateType)=>{
    return state.other.portionSizeElements
}