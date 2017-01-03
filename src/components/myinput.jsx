import React, {Component,PropTypes} from "react";
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

let BasicInputExample = React.createClass({
  render() {
    const { getFieldProps } = this.props.form;
    return (<List>
      <InputItem
        placeholder="请输入"
        data-seed="logId"
      >寄件人</InputItem>

      <InputItem
        {...getFieldProps('phone')}
        type="phone"
        placeholder="186 1234 1234"
      >手机号码</InputItem>

      <InputItem
        placeholder="请输入"
        data-seed="logId"
        extra={<div style={{ height:'100%',color:'blue',display:'flex',flexDirection:'row',justifyContent:'center'}} ><i style={{display:'block',width:'1px',height:'100%',background:"grey"}}></i> <div style={{marginLeft:".1rem",}}>获取定位</div> </div>}
      >选择地址</InputItem>


      <InputItem
        placeholder="请输入"
        data-seed="logId"
      >详细地址</InputItem>

    </List>);
  },
});

BasicInputExample = createForm()(BasicInputExample);

export default BasicInputExample;
