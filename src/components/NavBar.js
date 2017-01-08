import  React,{Component,PropTypes} from "react";
import {NavBar,Icon} from "antd-mobile";
import {Link,History,routerRedux} from "dva/router";


// export default  NavBar = () =>{
//   return (
//            <div>
//               <div style={{height:0}} />
//               <NarBar  leftContent = "返回"  mode="light" onLeftClick={()  =>console.log('onLeftClick') }
//                      rightContent = { <Icon key="0" type="search" />}
//                     > 同城直送 </NavBar>
//             </div>
//           )
// }

 const navbar = React.createClass({
     mixins:[History],

     getInitialState(){
          return{

          }
     },
      render(){
        return (
            <div>
                 <div style ={{height:"0"}} />
                 <NavBar style={{fontSize:'20px',fontWeight:'bold'}}  leftContent="返回" mode = "light" onLeftClick={() =>this.history.goBack()}
                    >{this.props.children}</NavBar>
            </div>
          )}
        })
      navbar.propTypes = {

        };
   export default navbar;
