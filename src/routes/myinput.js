import React ,{PropTypes,Component} from "react";

import NavBar from "../components/NavBar";

import MyInput from "../components/myinput";


const myinput = (props) =>(
        <div>
           <NavBar>填写寄件人地址</NavBar>
           <MyInput />
        </div>
)

export default myinput;
