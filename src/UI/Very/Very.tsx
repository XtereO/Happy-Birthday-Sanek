import React from "react"
import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { setPage } from "../../BLL/Reducers/veryReducer"
import { verysSelector, pageSelector, portionSizeElementsSelector, portionSizeSelector } from "../../BLL/Selectors/verySelector"
import { Template } from "../Bricks/Template"



type PropsType={
    isPC:boolean
}
export const Very:React.FC<PropsType>=({isPC})=>{
    
    useEffect(()=>{
        return ()=>{
            dispatch(setPage(1))
        }
    },[])


    const dispatch=useDispatch()
    
    return<Template 
        isPC={isPC}
        title={"Тот самый)"}
        setPage={setPage}
        pageSelector={pageSelector}
        portionSizeElementsSelector={portionSizeElementsSelector}
        portionSizeSelector={portionSizeSelector}
        elementsSelector={verysSelector}/>
}

