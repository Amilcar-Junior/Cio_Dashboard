import { configureStore } from "@reduxjs/toolkit";
import equipamentoReducer from "./conection/equipamento/reducers";
import requisicaoReducer from "./conection/requisicaos/reducers";



export default configureStore({

 reducer: {


   equipamentos: equipamentoReducer,
   requisicaos: requisicaoReducer,
   
 },

});

