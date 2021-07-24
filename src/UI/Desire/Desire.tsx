import React from "react"
import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { setPage } from "../../BLL/Reducers/desireReducer"
import { desiresSelector, pageSelector, portionSizeElementsSelector, portionSizeSelector } from "../../BLL/Selectors/desireSelector"
import { Template } from "../Bricks/Template"



type PropsType={
    isPC:boolean
}
export const Desire:React.FC<PropsType>=({isPC})=>{
    
    useEffect(()=>{
        return ()=>{
            dispatch(setPage(1))
        }
    },[])


    const dispatch=useDispatch()
    
    return<Template 
        isPC={isPC}
        title={"Пожелания"}
        setPage={setPage}
        pageSelector={pageSelector}
        portionSizeElementsSelector={portionSizeElementsSelector}
        portionSizeSelector={portionSizeSelector}
        elementsSelector={desiresSelector}/>
}

