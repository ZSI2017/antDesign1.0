import React,{PropTypes,Component} from "react";


import List from "../components/list";
import NavBar from "../components/NavBar"


const Myprops = {  data:
  [{
      title:"菜鸟驿站",
      subtitle:"官方合作门店，安全有保障",
      little:{data:[
          "安全保障","便捷代寄"
      ]}
  },
  {
      title:"附近快递网点",
      subtitle:"找就近网点快速提供服务",
      little:{data:[
          "快速上门","安全保障"
      ]}
  },  {
        title:"菜鸟驿站",
        subtitle:"官方合作门店，安全有保障",
        little:{data:[
            "安全保障","便捷代寄"
        ]}
    }
]}


const list = (props)=>{
    return (
        <div>
          <NavBar> 附近快递资源 </NavBar>
           <List {...Myprops}/>

        </div>
    )
}

list.PropTypes = {

}

export default list;
