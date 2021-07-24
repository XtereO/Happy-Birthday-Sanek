import img from "../../Media/BillyHaringtonMain.png";



type PropsType={
    height:number
}
export const Main:React.FC<PropsType>=({height})=>{
    return<div 
    style={{
        height
    }}
    
    className="">
        <img 
        src={img}
        style={{height}}
        className="w-100"/> 
    </div>
}