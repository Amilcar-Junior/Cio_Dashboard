import {

    CREATE_REQUISICAO,
   
    RETRIEVE_REQUISICAOS,
   
    UPDATE_REQUISICAO,
   
    DELETE_REQUISICAO,
   
   } from "./actionTypes";
   
   const initialState = [];
   
   function requisicaoReducer(requisicaos = initialState, action) {
   
    const { type, payload } = action;
   
    switch (type) {
   
      case CREATE_REQUISICAO:
   
        return [...requisicaos, payload];
   
      case RETRIEVE_REQUISICAOS:
   
        return payload;
   
      case UPDATE_REQUISICAO:
   
        return requisicaos.map((requisicao) => {
   
          if (requisicao.id === payload.id) {
   
            return {
   
              ...requisicao,
   
              ...payload,
   
            };
   
          } else {
   
            return requisicao;
   
          }
   
        });
   
      case DELETE_REQUISICAO:
   
        return requisicaos.filter(({ id }) => id !== payload.id);
   
      default:
   
        return requisicaos;
   
    }
   
   }
   
   export default requisicaoReducer;