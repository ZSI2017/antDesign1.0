
import request from "../utils/request";

export async function getList(){
      return request('/api/list');
}
