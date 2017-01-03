import React,{Component,PropTypes} from "react";
import {SearchBar} from "antd-mobile";

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
                    <SearchBar
                      value={this.state.value}
                      placeholder="搜索"
                      onSubmit={(value) => console.log(value, 'onSubmit')}
                      onClear={(value) => console.log(value, 'onClear')}
                      onFocus={() => console.log('onFocus')}
                      onBlur={() => console.log('onBlur')}
                      showCancelButton
                      onChange={this.onChange}
                    />

              </div>
           )
      }
})

export  default SearchBarExample
