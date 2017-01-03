import React,{PropTypes,Component} from "react";
require('../index2.css');

const old = (props) =>{
      return(
        <div className="am-list-body">
     <div className="am-list-item">
         <div className="am-list-thumb"><img src="https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png" alt="" /></div>
         <div className="am-list-content">
             <div className="am-list-title twocolumn">
                 <label>标签文本</label>
                 <div className="am-list-right-brief">
                     文本
                 </div>
             </div>
             <div className="am-list-brief twocolumn">
                 <label>辅助标签</label>
                 <div className="am-list-right-brief">
                      文本
                 </div>
             </div>
         </div>
     </div>
 </div>
      )
}

old.propTypes={

}

export default old;
