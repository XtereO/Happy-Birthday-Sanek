import { Nav } from "react-bootstrap"
import {NavLink} from "react-router-dom"



type PropsType={
    to:string
    title:string
    className?:string
    activeClassName?:string
}
export const MyLink:React.FC<PropsType>=({to,title,className,activeClassName})=>{
    return<Nav.Link className="text-center">
        <NavLink 
        to={to}
        activeClassName={activeClassName ?
            activeClassName :
            "header__link_active"}
        className={className ?
         className : 
         "header__link header__link_hover"}>
            {title}
        </NavLink>
    </Nav.Link>
}