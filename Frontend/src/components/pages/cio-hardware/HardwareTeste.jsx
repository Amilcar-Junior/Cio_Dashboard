import React, { Component } from 'react';
import Circle1 from './Circle1';
import CustoTotal from './CustoTotal';
import Circle2 from './Circle2';
import TotalEquipamento from './TotalEquipamento';
import TotalRequisicoes from './TotalRequisicoes';
import Barra from './Barra'

class HardwareTeste extends Component {

  render() {

    return (
      <>

        <div className="conteiner">
          <div className='row'>
          
            <div className='col-lg-4'>
              Total Equipamento:
              <TotalEquipamento/>
            </div>
            <div className='col-lg-4'>
              Total Requisições:
              <TotalRequisicoes/>
            </div>
            <div className='col-lg-4'>
              Custo Reparação: 
              <CustoTotal/>

            </div>

            <div className='col-lg-7'>
              Barra:
              <Barra/>
            </div>
            <div className='col-lg-5'>
              <div className='col-lg-12'>
                Custo Reparação por equipamento
                <Circle1/>
               
              </div>
              <div className='col-lg-12'>
                Equipamento por estado
                <Circle2/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HardwareTeste;