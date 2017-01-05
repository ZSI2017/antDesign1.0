import React,{PropTypes,Component} from "react";


import List from "../components/list";
import NavBar from "../components/NavBar";

import {connect}  from "dva";




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


const list = ({localtion,dispatch,mylist})=>{
           //console.log("dadsdf");
          // console.log(mylist);
            const myProps = {
                   dataSource:mylist.data2
            }

    return (
        <div>
          <NavBar> 附近快递资源 </NavBar>
           <List {...myProps}/>

        </div>
    )
}

list.PropTypes = {

}

function mapStateToPrps({mylist}){
      return {mylist};
}

export default connect(mapStateToPrps)(list);
