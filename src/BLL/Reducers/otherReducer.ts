

import { DB } from "../../DB/DB";
import { OtherType, ReasonType } from "../../Types/Types";

const SET_PAGE:"otherReducer/SET_PAGE"="otherReducer/SET_PAGE"

const initialState={
    others:[...DB.others] as OtherType[],
    page:1 as number,
    portionSizeElements:7 as number, // For count elements in one page
    portionSize:5 as number //For count button in one portion
}

type InitialStateType=typeof initialState
type ActionType=SetPageType

export const otherReducer=(state=initialState,action:ActionType):InitialStateType=>{
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