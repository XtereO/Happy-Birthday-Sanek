import React from "react"
import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { setPage } from "../../BLL/Reducers/otherReducer"
import { othersSelector, pageSelector, portionSizeElementsSelector, portionSizeSelector } from "../../BLL/Selectors/otherSelector"
import { Template } from "../Bricks/Template"



type PropsType={
    isPC:boolean
}
export const Other:React.FC<PropsType>=({isPC})=>{
    
    useEffect(()=>{
        return ()=>{
            dispatch(setPage(1))
        }
    },[])


    const dispatch=useDispatch()
    
    return<Template 
        isPC={isPC}
        title={"Другое"}
        setPage={setPage}
        pageSelector={pageSelector}
        portionSizeElementsSelector={portionSizeElementsSelector}
        portionSizeSelector={portionSizeSelector}
        elementsSelector={othersSelector}/>
}

