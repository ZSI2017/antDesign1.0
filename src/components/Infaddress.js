import React,{Component,PropTypes} from "react";

import {List,InputItem} from "antd-mobile";
import {createForm} from "rc-form";

  const inf = React.createClass({
         getInitialState(){
              return {

              }
         },

         render(){
              return(
                  <List>
                  <InputItem
                   style={{height:"2rem"}}
                    placeholder="从哪里寄"
                    data-seed="logId"
                  >
                  <div style={{width:".3rem"}}>
                     <img style={{ backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/zumwvwrngNMGSWe.png)', backgroundSize: 'cover', height: '0.44rem', width: '0.44rem' }} />


                    </div>

                  </InputItem>

                  <InputItem
                   style={{height:"2rem"}}
                    placeholder="请输入"
                    data-seed="logId"
                  >寄到哪里</InputItem>
                  </List>
              )
         }
  })

export default inf;
