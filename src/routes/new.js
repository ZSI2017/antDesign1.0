// import React,{Component,PropTypes} from "react";
//
// import New from "../components/new";
//
// function newContainter(){
//       return(
//            <div>
//                  <New />
//            </div>
//       )
// }
//
// newContainter.propTypes ={
//
// }
//
// export default newContainter;

import React,{Component ,PropTypes} from "react";
//import styles from "./new.css";
import Middle from "../components/middle";

const PlaceHolder = (props) => (
     <div style= {{
         background:'#000',
         color:'#bbb',
         textAlign:'center',
         height:'0.5rem',
         width:'.5rem',
         lineHeight:'0.3rem',
     }} {...props}>

     </div>
);

const newComponent = (props) => {
      return(
           <div style={{
              padding:'.1rem',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              width:'100%',
              height:'.65rem',
              borderBottom: '1px solid grey',
              background: 'red',
           }} {...props}>
                <PlaceHolder />
                <Middle />
               <div>
               </div>
           </div>
      )
}

export default newComponent;
