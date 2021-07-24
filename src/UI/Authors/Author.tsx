import { AlinaName, DB } from "../../DB/DB"



type PropsType={
    isPC:boolean
}
export const Author:React.FC<PropsType>=({isPC})=>{

    let authors=DB.authors.map(a=><div 
    key={a.title}
    className="col-md-6 text-center text-dark title mt-2">
        {(a.title) ? a.title : AlinaName}
    </div>)

    return<div 
        style={{minHeight:"100%"}}
        className="body">
        <div className="container">
        { isPC ? <div>
            <div className="text-center template__title">
                Авторы
            </div>

            <div className="row">
                {authors}
            </div>
        </div> :
        <div>
            <div className="template__title center">
                Авторы
            </div>

            <div>
                {authors}
            </div>

        </div>}
        </div>
    </div>
}