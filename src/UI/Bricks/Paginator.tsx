import { useState } from "react"



type PropsType={
    page:number
    portionSize:number
    portionSizeElements:number 
    count:number//all elements 
    callback:(page:number)=>void
}
export const Paginator:React.FC<PropsType>=({page,portionSize,count,callback,portionSizeElements})=>{
    
    let [portionNumber,setPortionNumber]=useState(1)
    
    const handlerBack=()=>{
        setPortionNumber(prev=>--prev)
    }
    const handlerNext=()=>{
        setPortionNumber(prev=>++prev)
    }

    //Create Buttons
    let buttons=[]
    for(let i=1;i<=Math.ceil(count/portionSizeElements);i++){
        let e:any=null//JSX element
        if(i==page){
            e=<button 
            className="btn btn-light">
                {i}
            </button>
        }else{
            e=<button
            onClick={()=>callback(i)}
            className="btn btn-outline-success">
                {i}
            </button>
        }
        buttons.push(e)
    }


    //render
    return<div className="btn-group">
        {portionNumber>1 &&
        <button
        className="btn btn-light"
        onClick={handlerBack}
        >
            {"<"}
        </button>}
           
           
            {[...buttons].slice((portionNumber-1)*portionSize,portionNumber*portionSize)}
        
        
        {portionNumber*portionSize<Math.ceil(count/portionSizeElements) &&
        <button
        onClick={handlerNext}
        className="btn btn-light">
            {">"}
        </button>}
    </div>
}