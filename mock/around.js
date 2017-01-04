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

     }
}
