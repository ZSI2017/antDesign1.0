'user strick';

const qs = require("qs");

// 引入mock  js

const mockjs = require('mockjs');

module.exports = {
     'GET /api/test' (req,res){
          const page = qs.parse(req.query);
          const data =
            [{
                title:'顺丰-北京苹果社区店',
                no1:'地址：百子湾路苹果社区临街低商',
                no2:'营业时间：08:00-18:00',
                no3:'取件时间：08:00-18:00',
              },
              {
                title:'顺丰-北京海淀社区店',
                no1:'地址：百子湾路苹果社区临街低商',
                no2:'营业时间：08:00-18:00',
                no3:'取件时间：08:00-18:00',
              },{
                title:'顺丰-北京苹果社区店',
                no1:'地址：百子湾路苹果社区临街低商',
                no2:'营业时间：08:00-18:00',
                no3:'取件时间：08:00-18:00',
              }];
              res.json({
                   success:true,
                   data:data
              })
     },
  'GET /api/list' (req,res){
           const data =
          [{
               title:"菜鸟驿站",
                          subtitle:"官方合作门店，安全有保障",
               little:{data:[
                   "安全保障","便捷代寄"
               ]}
           },
           {
               title:"附近快递网点",
               subtitle:"找就近网点快速提供服务",
               little:{data:[
                   "快速上门","安全保障"
               ]}
           },  {
                 title:"菜鸟驿站",
                 subtitle:"官方合作门店，安全有保障",
                 little:{data:[
                     "安全保障","便捷代寄"
                 ]}
             }
         ];
         res.json({
               success:true,
               data:data
         })
  }

}
