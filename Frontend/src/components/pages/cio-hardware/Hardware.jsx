import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import axios from "axios";


class Hardware extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options:{},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E'],

      /* selectOptionsEquipamento: [],  
      EquipamentosID: [],
      EquipamentosNome: [], */
      
    }
  }

  /* async getOptionsEquipamento() {
    const equipamento = await axios.get("http://localhost:1337/equipamentos");

    const data = equipamento.data;

    const options = data.map((e) => ({
      value: e.id,
      label: e.nome_equipamento,
    }));

    this.setState({ selectOptionsEquipamento: options });
    console.log(this.state.selectOptionsEquipamento);
  }


  async getEquipamentoId() {
    const equipamento = await axios.get("http://localhost:1337/equipamentos");

    const data = equipamento.data;

    const options = data.map((e) => ({
      value: e.id,

    }));

    this.setState({ EquipamentosID: options });
  }

  async getEquipamentoNome() {
    const equipamento = await axios.get("http://localhost:1337/equipamentos");

    const data = equipamento.data;

    const options = data.map((e) => ({
      label: e.nome_equipamento,
    }));

    this.setState({ EquipamentosNome: options });
  }

  componentDidMount(){
    this.getEquipamentoId();
    this.getEquipamentoNome();
    this.getOptionsEquipamento();
  } */

  render() {

    return (
      <>
      
        <div className="conteiner">
          <div className='row'>

            <div className='col-lg-4'>
              <div className="donut">
                <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
              </div>
            </div>
            <div className='col-lg-4'>
              {/* <div className="donut">
                <Chart options={this.state.options} series={this.state.EquipamentosID} type="donut" width="380" />
              </div> */}

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hardware;