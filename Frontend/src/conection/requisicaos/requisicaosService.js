import http from "../../http";

class RequisicaosService{

 getAll() {

   return http.get("/requisicaos");

 }

 get(id) {

   return http.get(`/requisicaos/${id}`);

 }

 create(data) {

   return http.post("/requisicaos", data);

 }

 update(id, data) {

   return http.put(`/requisicaos/${id}`, data);

 }

 delete(id) {

   return http.delete(`/requisicaos/${id}`);

 }

}

export default new RequisicaosService();