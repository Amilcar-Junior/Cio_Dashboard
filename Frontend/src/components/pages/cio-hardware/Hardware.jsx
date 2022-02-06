import React, { Component } from 'react';
import Circle1 from './Circle1';
import CustoTotal from './CustoTotal';
import Circle2 from './Circle2';
import TotalEquipamento from './TotalEquipamento';
import TotalRequisicoes from './TotalRequisicoes';
import Barra from './Barra'

class Hardware extends Component {

  render() {

    return (
      <>

        <div className="conteiner">
          <div className='row'>
          <div className='end' />
            <div className='col-lg-4'>
              <h3>Total Equipamento:</h3>
              <TotalEquipamento />
            </div>
            <div className='col-lg-4'>
            <h3>Total Requisições por Manutenção:</h3>
              <TotalRequisicoes />
            </div>
            <div className='col-lg-4'>
            <h3>Custo Reparação:</h3>
              <CustoTotal />

            </div>
            <div className='end' />
            <div className='col-lg-7'>
              <h3>Equipamento Danificado/Funcionando:</h3>
              <Barra />
            </div>
            
            <div className='col-lg-5'>
              <div className='col-lg-12'>
                <h3>Custo Reparação por equipamento:</h3>
                <Circle1 />

              </div>
              <div className='end' />
              <div className='col-lg-12'>
                <h3>Equipamento por Agencia:</h3>
                <Circle2 />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hardware;