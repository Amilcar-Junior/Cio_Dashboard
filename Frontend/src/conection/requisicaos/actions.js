import {

    CREATE_REQUISICAO,

    RETRIEVE_REQUISICAOS,

    UPDATE_REQUISICAO,

    DELETE_REQUISICAO,

} from "./actionTypes";

import { toast } from "react-toastify";
import RequisicaosService from "./requisicaosService";

export const createRequisicao =

    (date_requisicao,tipo_manutencao,date_conclusao,status,custo,equipamento,) => async (dispatch) => {

        try {

            const res = await RequisicaosService.create({

                date_requisicao,tipo_manutencao,date_conclusao,status,custo,equipamento,
            });


            dispatch({

                type: CREATE_REQUISICAO,

                payload: res.data,
                

            });

            toast.success('Requisicao adicionado com sucesso!');
            return Promise.resolve(res.data);

        } catch (err) {

            toast.error('Requisicao não adicionado!')
            return Promise.reject(err);

        }

    };

export const retrieveRequisicaos = () => async (dispatch) => {

    try {

        const res = await RequisicaosService.getAll();

        dispatch({

            type: RETRIEVE_REQUISICAOS,

            payload: res.data,

        });

    } catch (err) {

        toast.error('Requisicao não encontrado!');
        console.log(err);

    }

};

export const updateRequisicao = (id, data) => async (dispatch) => {

    try {

        const res = await RequisicaosService.update(id, data);

        dispatch({

            type: UPDATE_REQUISICAO,

            payload: res.data,

        });

        toast.success('Requisicao foi alterado com sucesso!')
        return Promise.resolve(res.data);

    } catch (err) {
        toast.error('Requisicao não foi alterado!')
        return Promise.reject(err);

    }

};

export const deleteRequisicao = (id) => async (dispatch) => {

    try {

        await RequisicaosService.delete(id);

        dispatch({

            type: DELETE_REQUISICAO,

            payload: { id },

        });

        toast.success('Requisicao Deletado com sucesso!')

    } catch (err) {

        toast.error('Requisicao não foi Deletado!')
        console.log(err);

    }

};