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

const MyBadge = (props) =>(
  <Badge text="自动缴费" style={{
   padding: '0 ',
   backgroundColor: '#fff',
   borderRadius: 1,
   color: '#f19736',
   border: '.02rem  solid #f19736',
 }}
 />
)
const list =(props) => {
      console.log(history.replaceState(null,'/send'));
          return  (
              <div>
              <List>
      <Item
        thumb={<PlaceHolder />}
        arrow="horizontal"
        onClick={() => {history.replaceState } }
      >菜鸟驿站 <Brief style={{fontSize:'.16rem',marginTop:'0'}}>官方合作门店，安全有保障</Brief><Brief> <MyBadge /> <MyBadge /> </Brief></Item>
    </List>
              </div>
          )
      }


export default list;
