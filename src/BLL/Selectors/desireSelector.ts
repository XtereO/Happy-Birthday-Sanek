import { AppStateType } from "../store";


export const pageSelector=(state:AppStateType):number=>{
    return state.desire.page
}
export const portionSizeSelector=(state:AppStateType)=>{
    return state.desire.portionSize
}
export const desiresSelector=(state:AppStateType)=>{
    return state.desire.desires
}
export const portionSizeElementsSelector=(state:AppStateType)=>{
    return state.desire.portionSizeElements
}