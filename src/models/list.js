import {hashHistory}  from "dva/router";

import request from "../utils/request";

import {getList} from "../services/list";

export default {
        namespace:'mylist',
        state:{
             data2:[]
        },
        subscriptions:{
             setup({dispatch,history}){
                   history.listen(location=>{
                        dispatch({
                              type:'getOwnList',
                              payload:{name:"liqi",age:"23"}
                        });
                   })
             }
        },

        effects:{
             *getOwnList({payload},{select,call,put}){
                  const {data} = yield call (getList,payload);
                  //console.log("123456");
                //  console.log(data.data);
                  if(data){
                        yield put ({
                             type:"getAllList",
                             payload:{
                                   data2:data.data,
                             }
                        })
                  }
             }
        },
        reducers:{
              getAllList(state,action){
                    //console.log(action.payload);
                    return {...state,...action.payload};
              }
        },
}
