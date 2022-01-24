import {

    CREATE_EQUIPAMENTO,

    RETRIEVE_EQUIPAMENTOS,

    UPDATE_EQUIPAMENTO,

    DELETE_EQUIPAMENTO,

} from "./actionTypes";

import { toast } from "react-toastify";
import EquipamentosService from "./equipamentosService";

export const createEquipamento =

    (nome_equipamento,agencia,status,requisicaos,) => async (dispatch) => {

        try {

            const res = await EquipamentosService.create({

                nome_equipamento,agencia,status,requisicaos,

            });


            dispatch({

                type: CREATE_EQUIPAMENTO,

                payload: res.data,
                

            });

            toast.success('Equipamento adicionado com sucesso!');
            return Promise.resolve(res.data);

        } catch (err) {

            toast.error('Equipamento não adicionado!')
            return Promise.reject(err);

        }

    };

export const retrieveEquipamentos = () => async (dispatch) => {

    try {

        const res = await EquipamentosService.getAll();

        dispatch({

            type: RETRIEVE_EQUIPAMENTOS,

            payload: res.data,

        });

    } catch (err) {

        toast.error('Equipamento não encontrado!');
        console.log(err);

    }

};

export const updateEquipamento = (id, data) => async (dispatch) => {

    try {

        const res = await EquipamentosService.update(id, data);

        dispatch({

            type: UPDATE_EQUIPAMENTO,

            payload: res.data,

        });

        toast.success('Equipamento foi alterado com sucesso!')
        return Promise.resolve(res.data);

    } catch (err) {
        toast.error('Equipamento não foi alterado!')
        return Promise.reject(err);

    }

};

export const deleteEquipamento = (id) => async (dispatch) => {

    try {

        await EquipamentosService.delete(id);

        dispatch({

            type: DELETE_EQUIPAMENTO,

            payload: { id },

        });

        toast.success('Equipamento Deletado com sucesso!')

    } catch (err) {

        toast.error('Equipamento não foi Deletado!')
        console.log(err);

    }

};