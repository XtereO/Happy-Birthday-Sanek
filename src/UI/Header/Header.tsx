import { Formik, useFormikContext } from "formik"
import React, { useState } from "react"
import { Container, Modal, Nav, Navbar } from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { MyLink } from "../Bricks/MyLink"

type PropsButtonType={}
const MyButton:React.FC<PropsButtonType>=(props)=>{
    
    const {submitForm}=useFormikContext()

    return<button
    onClick={submitForm}
    className="btn btn-success">
        Оформить
    </button>
}
type PropsType={}
export const Header:React.FC<PropsType>=(props)=>{
    
    let [show,setShow]=useState(false)
    const handlerOpen=()=>{
        setShow(true)
    }
    const handlerClose=()=>{
        setShow(false)
    }

    return<div>
        <Navbar bg="dark" variant="dark" 
        sticky="top" collapseOnSelect
        expand="md">
            <Container>
                <Navbar.Brand>
                    <NavLink 
                    style={{color:"white"}}
                    className="header__link header__link_hover" 
                    to="/">
                        Главная
                    </NavLink>   
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <MyLink to="/desire"
                        title={"Пожелания"}/>
                        <MyLink to="/very"
                        title={"Тот самый)"}  />
                        <MyLink to="/reason"
                        title={"Причины побить"} />
                        <MyLink to="/other"
                        title={"Другое"}/>
                        <MyLink to="/author"
                        title={"Авторы"}/>
                        <Nav.Link className="text-center">
                        <span 
                        onClick={handlerOpen}
                        className="header__link header__link_hover">
                            Оформить кредит
                        </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Formik
        initialValues={{price:"0"}}
        validate={(values)=>{
            let errors:any={price:null};
            if(values.price || values.price=="0"){
                errors={price:"У нас нет еще такой суммы)"}
            }
            if (errors.price!==null){
                return errors
            }
            return {}
        }}
        onSubmit={()=>{
            setShow(false)
        }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit
        })=><form onSubmit={handleSubmit}>
        <Modal show={show}
        onHide={handlerClose}>
            <Modal.Header>
                <Modal.Title>
                    Оформить кредит
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input 
                type="number"
                name="price" 
                value={values.price}
                onChange={handleChange}         
                className="form-control" />
                <div className="text-danger">
                    {errors.price && touched.price &&
                    errors.price}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button 
                onClick={handlerClose}
                className="btn btn-danger">
                    Закрыть
                </button>
                <MyButton/>
            </Modal.Footer>
        </Modal>
        </form>}
        </Formik>
    </div>
}

