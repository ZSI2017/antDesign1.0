import React,{Component,PropTypes} from "react";

const my = React.createClass({
       render(){
               const items = this.props.array;
             return(
             <div>
               {
                   items.map(function(item) {
                    return  <div key = {item.id} style={{
                          padding:".1rem .4rem",
                          borderBottom:'.02rem solid #fff'
                       }}>
                            <p style={{fontSize:'.40rem'}}> {item.title}</p>
                            <p style={{color:"grey"}}> {item.no1} </p>
                            <p style={{color:"grey"}}> {item.no2}</p>
                            <p style={{color:"grey"}}>{item.no3}</p>
                       </div>

               })
               }
               </div>
             )
       }
})

export default my;
