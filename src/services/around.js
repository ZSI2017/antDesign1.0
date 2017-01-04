import request from "../utils/request";
import qs from "qs";

export async function query(params){
      console.log(`/api/test?${qs.stringify(params)}`);
      return request(`/api/test?${qs.stringify(params)}`);
}
