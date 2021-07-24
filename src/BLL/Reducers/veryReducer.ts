
import { DB } from "../../DB/DB";
import { DesireType, VeryType } from "../../Types/Types";

const SET_PAGE:"veryReducer/SET_PAGE"="veryReducer/SET_PAGE"

const initialState={
    very:[...DB.very] as VeryType[],
    page:1 as number,
    portionSizeElements:7 as number, // For count elements in one page
    portionSize:5 as number //For count button in one portion
}

type InitialStateType=typeof initialState
type ActionType=SetPageType

export const veryReducer=(state=initialState,action:ActionType):InitialStateType=>{
    switch(action.type){
        case SET_PAGE:
            return{
                ...state,
                page:action.page
            }
        default:return state
    }
}

type SetPageType={
    type:typeof SET_PAGE
    page:number
}
export const setPage=(page:number):SetPageType=>{
    return{
        type:SET_PAGE,
        page
    }
}