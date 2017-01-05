import React,{Component,PropTypes} from "react";
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
           return (
              <div>
                    {
                    //   <SearchBar
                    //   value={this.state.value}
                    //   placeholder="搜索"
                    //   onSubmit={(value) => console.log(value, 'onSubmit')}
                    //   onClear={(value) => console.log(value, 'onClear')}
                    //   onFocus={() => console.log('onFocus')}
                    //   onBlur={() => console.log('onBlur')}
                    //   showCancelButton
                    //   onChange={this.onChange}
                    // />
                  }
                  <InputItem
                      style={{background:'grey'}}
                       placeholder = "正在定位中..."
                       >
                       <div  style={{marginRight:"0",backgroundImage:'url(https://os.alipayobjects.com/rmsportal/zumwvwrngNMGSWe.png)',backgroundSize:'cover',height:'.44rem',width:'.44rem'}} />
                       </InputItem>

              </div>
           )
      }
})

export  default SearchBarExample
