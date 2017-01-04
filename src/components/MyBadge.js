import React,{PropTypes,Component} from "react";
import {List,Icon,Badge} from "antd-mobile";

const Item = List.Item;
const Brief = Item.Brief;

const MyBadge = (props) =>{
  // console.log("myBadge>>>>>>>>>>>>>>>>>");
//   console.log(props);
   return(
         <div>
             {
                props.data.map(function(item){
                    return (
                      <Badge key={item.id} text={item} style={{
                                marginRight:'.1rem',
                                padding: '0 ',
                                backgroundColor: '#fff',
                                borderRadius: 1,
                                color: '#f19736',
                                border: '.02rem  solid #f19736',
                           }}
                           />
                          )
                      })
                    }
         </div>
      )
}

export default MyBadge;
