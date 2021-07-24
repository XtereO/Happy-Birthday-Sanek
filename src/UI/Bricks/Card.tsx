

type PropsType={
    title:string
}
export const Card:React.FC<PropsType>=({title})=>{
    return<div className="w-100 center mt-2 mb-2">
    <div className="template__card">
        {title}
    </div>
    </div>
}