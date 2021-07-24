import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppStateType } from "../../BLL/store"
import { DesireType } from "../../Types/Types"
import { Paginator } from "../Bricks/Paginator"
import { Card } from "./Card"



type PropsType={
    isPC:boolean
    pageSelector:(state:AppStateType)=>number
    portionSizeSelector:(state:AppStateType)=>number
    portionSizeElementsSelector:(state:AppStateType)=>number
    elementsSelector:(state:AppStateType)=>DesireType[]
    setPage:(page:number)=>void
    title:string
}
export const Template:React.FC<PropsType>=({
    isPC,pageSelector,
    portionSizeElementsSelector,
    portionSizeSelector,title,
    elementsSelector,setPage
    })=>{
    
    useEffect(()=>{
        return ()=>{
            dispatch(setPage(1))
        }
    },[])


    const dispatch=useDispatch()
    const pageFromSelector=useSelector(pageSelector)
    const portionSize=useSelector(portionSizeSelector)
    const portionSizeElements=useSelector(portionSizeElementsSelector)
    const elements=useSelector(elementsSelector)
    const elementsJSX=elements.map((e,index)=>{
        //try{
        return<Card key={"1"+e.title} title={e.title} />
        //}catch(e){
            //console.log(e,index)
          //  throw Error
        //}
    })
    const callback=(page:number)=>{
        dispatch(setPage(page))
    }
    
    return<div className="body pt-3"
    style={{minHeight:"100%"}}>
        <div className="container">
        { isPC ? <div className="row">
            <div className="col-md-9 template__title">
                {title}
            </div>

            <div className="col-md-3 center">
                <Paginator
                count={elements.length}
                page={pageFromSelector}
                portionSize={portionSize}
                portionSizeElements={portionSizeElements}
                callback={callback} />
            </div>

            <div>
                {[...elementsJSX]
                .slice((pageFromSelector-1)*portionSizeElements,
                (pageFromSelector)*portionSizeElements)}
            </div>
        </div> :
        <div className="">
            <div className="template__title center">
                {title}
            </div>

            <div>
                {[...elementsJSX]
                .slice((pageFromSelector-1)*portionSizeElements,
                (pageFromSelector)*portionSizeElements)}
            </div>

            <div className="center template__buttons">
                <Paginator
                count={elements.length}
                page={pageFromSelector}
                portionSize={portionSize}
                portionSizeElements={portionSizeElements}
                callback={callback} />
            </div>
        </div>}
        </div>
    </div>
}

