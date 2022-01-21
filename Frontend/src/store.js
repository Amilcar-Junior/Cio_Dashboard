import { configureStore } from "@reduxjs/toolkit";
import servicoReducer from "./conection/servicos/reducers";


/* import testeReducer from "./conection/testes/reducers"; */

export default configureStore({

 reducer: {

   /* testes: testeReducer, */
   servicos: servicoReducer,
   
 },

});

