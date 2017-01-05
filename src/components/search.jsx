import React,{Component,PropTypes} from "react";
import ReactDOM from "react-dom";
import {SearchBar,InputItem} from "antd-mobile";

const SearchBarExample = React.createClass({
      getInitialState(){
           return {
                value:"北京市苹果社区"
           };
      },
      onChange(value){
         this.setState({value});
      },
      render(){
         console.log("search1234");
        console.log(ReactDOM.findDOMNode);

           return (
              <div>

                      <SearchBar
              cancelText={<div style={{display:'flex',alignItems:'center',flexContent:'space-between'}}><img style={{width:".40rem",height:'.4rem'}} src="../../images/dingwei.png" /> <p style={{color:"#515151"}}>定位</p> </div>}
                      value={this.state.value}
                      placeholder="搜索"
                     style={{backgroundImage:"../../images/dinwei2.png"}}
                      onSubmit={(value) => console.log(value, 'onSubmit')}
                      onClear={(value) => console.log(value, 'onClear')}
                      onFocus={() => console.log('onFocus')}
                      onBlur={() => console.log('onBlur')}
                      showCancelButton
                      onChange={this.onChange}
                    />

                 { // <InputItem
                //       style={{background:'#cdcdcd'}}
                //        placeholder = "正在定位中..."
                //        >
                //        <div  style={{marginRight:"0",backgroundImage:'url(https://os.alipayobjects.com/rmsportal/zumwvwrngNMGSWe.png)',backgroundSize:'cover',height:'.44rem',width:'.44rem'}} />
                //        </InputItem>
                     }

              </div>
           )
      }
})

export  default SearchBarExample
