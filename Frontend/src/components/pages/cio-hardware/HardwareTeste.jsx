import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import axios from "axios";


class HardwareTeste extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [3, 4, 3, 3],
      labels: ['a', 'b', 'c', 'd'],



    }
  }





  render() {

    return (
      <>

        <div className="conteiner">
          <div className='row'>
            <div className='col-lg-4'>
              Total Equipamento
            </div>
            <div className='col-lg-4'>
              Total Danificado
            </div>
            <div className='col-lg-4'>
              Custo Reparação
            </div>

            <div className='col-lg-7'>
              Tabela
            </div>
            <div className='col-lg-5'>
              <div className='col-lg-12'>
                Custo Reparação por equipamento
              </div>
              <div className='col-lg-12'>
                Equipamento por estado
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HardwareTeste;