import React , {PropTypes,Component} from "react";

import NavBar from "../components/NavBar";
import Search from "../components/Search";

import {connect} from "dva";

import My from "../components/own";

// const myprops ={
//     array:[{
//         title:'顺丰-北京苹果社区店',
//         no1:'地址：百子湾路苹果社区临街低商',
//         no2:'营业时间：08:00-18:00',
//         no3:'取件时间：08:00-18:00',
//       },
//       {
//         title:'顺丰-北京苹果社区店',
//         no1:'地址：百子湾路苹果社区临街低商',
//         no2:'营业时间：08:00-18:00',
//         no3:'取件时间：08:00-18:00',
//       },{
//         title:'顺丰-北京苹果社区店',
//         no1:'地址：百子湾路苹果社区临街低商',
//         no2:'营业时间：08:00-18:00',
//         no3:'取件时间：08:00-18:00',
//       }]
//     }


const around = (props) => {

      var {location,dispatch,myaround,history,params}=props
      console.log("data123456");
      console.log(location.query.title);
      const {data1} =myaround;

     const myProps = {
            datasource:data1,
            title:location.query.title
     }

        return(
            <div>
                <NavBar> 附近快递网点 </NavBar>
                <Search  />
                <My {...myProps} />
            </div>
        )
}

around.PropTypes = {

};

// 指定订阅的数据，这里关联 userss
   function mapStateToPrps({myaround}){
          return {myaround};
   }

  export default connect(mapStateToPrps)(around);
