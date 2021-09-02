import React from "react";
import "./adminPage.css";
import {useHistory} from "react-router-dom";
import SideBarAdmin from "../sideBarAdmin/SideBarAdmin";
import {Footer} from "../footer/Footer";
import {RegisterForm} from "../registerForm/RegisterForm";



export const AdminPage = () => {

    return (

        <div className={"registerForm"}>
            <SideBarAdmin/>
            <RegisterForm/>
            <Footer/>
        </div>


            )



}