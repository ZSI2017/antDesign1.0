import React,{Component,PropTypes} from "react";

// const my = React.createClass({
//
//        render(){
//                //   const items = this.props.datasource;
//                console.log("own1234");
//                console.log(this.props.datasource)
//              return(
//              <div>
//                {
//                    this.props.datasource.map(function(item) {
//                     return  <div key = {item.id} style={{
//                           padding:".1rem .4rem",
//                           borderBottom:'.02rem solid #fff'
//                        }}>
//                             <p style={{fontSize:'.40rem'}}> {item.title}</p>
//                             <p style={{color:"grey"}}> {item.no1} </p>
//                             <p style={{color:"grey"}}> {item.no2}</p>
//                             <p style={{color:"grey"}}>{item.no3}</p>
//                        </div>
//
//                })
//                }
//                </div>
//              )
//        }
// })
const my = React.createClass({




               //   const items = this.props.datasource;
              // const items = datasource;
              //  let  items =[];
              //  if(datasource){
               //
              //  }else{
              //     items=datasource;
              //  }
         getInitialState(){
              return{}
         },

        render(){
             console.log("12345");
             console.log(this.props);
             var _this =this;
             return(
             <div>
                   {
                  this.props.datasource.map(function(item) {
                    return  <div keys = {item.id} style={{
                          padding:".1rem .4rem",
                          borderBottom:'.02rem solid #fff'
                       }}>
                            <p style={{fontSize:'.40rem'}}> {_this.props.title}{item.title}</p>
                            <p style={{color:"grey"}}> {item.no1} </p>
                            <p style={{color:"grey"}}> {item.no2}</p>
                            <p style={{color:"grey"}}>{item.no3}</p>
                       </div>

               })
            }

               </div>
             )}

     })



export default my;
