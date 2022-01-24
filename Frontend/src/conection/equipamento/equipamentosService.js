import http from "../../http";

class EquipamentosService{

 getAll() {

   return http.get("/equipamentos");

 }

 get(id) {

   return http.get(`/equipamentos/${id}`);

 }

 create(data) {

   return http.post("/equipamentos", data);

 }

 update(id, data) {

   return http.put(`/equipamentos/${id}`, data);

 }

 delete(id) {

   return http.delete(`/equipamentos/${id}`);

 }

}

export default new EquipamentosService();