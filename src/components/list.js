import React, {Component,PropTypes} from "react";
import {List,Icon,Badge} from "antd-mobile";
import {Link,History} from "dva/router";

const Item = List.Item;
const Brief = Item.Brief;

const PlaceHolder = (props) =>(
     <div style={{
       background:'#000',
       color:'#bbb',
       textAlign:'center',
       height:'1.2rem',
       lineHeight:'0.6rem',
       width:'1.2rem',
       borderRadius:'.2rem'
     }} {...props}>
     </div>
)

import MyBadge from "./MyBadge.js"
// const MyBadge = (props) =>{
//    console.log("myBadge>>>>>>>>>>>>>>>>>");
//    console.log(props);
//    return(
//        <div>
//        adfasdf
//        {
//         //  props.data.map(function(item){
//         //      return (
//         //        <Badge key={item.id} text={item} style={{
//         //         padding: '0 ',
//         //         backgroundColor: '#fff',
//         //         borderRadius: 1,
//         //         color: '#f19736',
//         //         border: '.02rem  solid #f19736',
//         //       }}
//         //       />
//         //      )
//         //  })
//        }
//        </div>
//    )
// }
const list =(props) => {
      mixins:[ History ];
      console.log(history)
          return  (
            <div>
                { props.data.map(function(item){
                        return  ( <List>
                                    <Item
                                      key= {item.id}
                                      thumb={<PlaceHolder />}
                                      arrow="horizontal"
                                      onClick={() => {history.replaceState } }
                                    >{item.title}
                                      <Brief style={{fontSize:'.16rem',marginTop:'0'}}>{item.subtitle}</Brief>
                                   <Brief><MyBadge{...item.little}/></Brief>
                                    </Item>
                                   </List>)
                    })
              }
        </div>
    // <List>
    //     <Item
    //       thumb={<PlaceHolder />}
    //       arrow="horizontal"
    //       onClick={() => {history.replaceState } }
    //     >菜鸟驿站 <Brief style={{fontSize:'.16rem',marginTop:'0'}}>官方合作门店，安全有保障</Brief><Brief> <MyBadge /> <MyBadge /> </Brief></Item>
    // </List>
          )
      }


export default list;
