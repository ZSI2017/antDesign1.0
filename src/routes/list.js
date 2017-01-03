import React,{PropTypes,Component} from "react";

import List from "../components/list";
import NavBar from "../components/NavBar"

const list = (props)=>{
    return (
        <div>
          <NavBar> 附近快递资源 </NavBar>
           <List />
           <List />
           <List />
           <List />
        </div>
    )
}

list.PropTypes = {

}

export default list;
