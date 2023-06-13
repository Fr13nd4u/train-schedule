import api from '../api';

const getAll = (): any => {
  return api.get("/train");
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