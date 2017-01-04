import {hashHistory}  from "dva/router";

import request from '../utils/request';

import {query} from "../services/around";

export default{
      namespace:"myaround",
      state:{
         data1:[]
        },
      subscriptions:{
          setup({dispatch,history}){
               history.listen(location =>{
                     if(location.pathname === "/around"){
                          dispatch({
                                type:"getAll",
                                payload:{name:"liqi",age:'23'}
                          });
                     }
               });

          },
      },

      effects:{
          *getAll({payload},{select,call,put}){
              const {data} = yield call(query,payload);
              console.log('eff'+data);
              if(data) {
                  yield put ({
                        type:'getAllSuccess',
                        payload:{
                             data1:data.data,
                        }
                  })
              }
          }
      },
      reducers:{
           getAllSuccess(state,action){
              //  console.log(action.payload)
                return{...state,...action.payload};
           },
      },
}
