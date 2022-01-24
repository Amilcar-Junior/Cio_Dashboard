import {

    CREATE_EQUIPAMENTO,
   
    RETRIEVE_EQUIPAMENTOS,
   
    UPDATE_EQUIPAMENTO,
   
    DELETE_EQUIPAMENTO,
   
   } from "./actionTypes";
   
   const initialState = [];
   
   function equipamentoReducer(equipamentos = initialState, action) {
   
    const { type, payload } = action;
   
    switch (type) {
   
      case CREATE_EQUIPAMENTO:
   
        return [...equipamentos, payload];
   
      case RETRIEVE_EQUIPAMENTOS:
   
        return payload;
   
      case UPDATE_EQUIPAMENTO:
   
        return equipamentos.map((equipamento) => {
   
          if (equipamento.id === payload.id) {
   
            return {
   
              ...equipamento,
   
              ...payload,
   
            };
   
          } else {
   
            return equipamento;
   
          }
   
        });
   
      case DELETE_EQUIPAMENTO:
   
        return equipamentos.filter(({ id }) => id !== payload.id);
   
      default:
   
        return equipamentos;
   
    }
   
   }
   
   export default equipamentoReducer;