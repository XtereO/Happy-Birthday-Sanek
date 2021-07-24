import { AppStateType } from "../store";


export const pageSelector=(state:AppStateType):number=>{
    return state.very.page
}
export const portionSizeSelector=(state:AppStateType)=>{
    return state.very.portionSize
}
export const verysSelector=(state:AppStateType)=>{
    return state.very.very
}
export const portionSizeElementsSelector=(state:AppStateType)=>{
    return state.very.portionSizeElements
}