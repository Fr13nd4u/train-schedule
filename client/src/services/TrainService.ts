import api from '../api';

const getAll = (search = '', sortBy = ''): any => {
  let url = "/train";
  
  if (search || sortBy) {
    const queryParams = [];
    
    if (search) {
      queryParams.push(`search=${search}`);
    }
    
    if (sortBy) {
      queryParams.push(`sortBy=${sortBy}`);
    }
    
    url += `?${queryParams.join("&")}`;
  }
  
  return api.get(url);
};

const get = (id: string) => {
  return api.get(`/train/${id}`);
};

const create = (data: any) => {
  return api.post("/train", data);
};

const update = (id: string, data: any) => {
  return api.put(`/train/${id}`, data);
};

const remove = (id: string) => {
  return api.delete(`/train/${id}`);
};

const TrainService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default TrainService;