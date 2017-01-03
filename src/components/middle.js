import React,{Component,PropTypes} from "react";

const middle = (props) =>{
           return (
                <div style={{
                   height:'0.5rem',
                  marginTop:'.04rem',
                   marginLeft:'.05rem',
                   display:'flex',
                   flexDirection:'column',
                   justifyContent:'space-around',
                   flex:'1'
                }}>
                    <p style={{fontSize:'16px',fontWeight:'bold',margin:'0'}}>可口可乐</p>
                    <p style={{fontSize:'10px',color:'grey',margin:'0'}}>可口可乐</p>
                    <div>

                    </div>

                </div>
           )
}

middle.PropTypes={

}

export default middle;
