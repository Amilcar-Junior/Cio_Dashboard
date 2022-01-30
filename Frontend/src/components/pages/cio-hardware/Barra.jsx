import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from "axios";
import { isAsyncThunkAction } from '@reduxjs/toolkit';

class Barra extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: [],
      series: [{
        name:"Danificado",
        data: [4, 2, 2, 2, 1, 3, 2]
      }, {
        name: "Funcionando",
        data: [8, 32, 23, 32, 13, 9, 6]
      }],
      options: {
        labels: [],
        chart: {
          type: 'bar',
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: [],
        },
      },
  }
    
  }


  async getOptionsRequisicaos() {
    const equipamentos = await axios.get("http://localhost:1337/equipamentos");

    const data = equipamentos.data;

    const valores = data.reduce((acc,item)=>{
      	const exists = acc.find(element=>element.equipamento === item.nome_equipamento);
        if(exists){
          
          return acc;
        }
        acc.push({ equipamento: item.nome_equipamento})
        return acc;
    },[]);

    const valors = data.reduce((acc,item)=>{
      const exists = acc.find(element=>element.equipamento === item.status);
      if(exists){
        
        return acc;
      }
      acc.push({ equipamento: item.status})
      return acc;
  },[]);

  const stats = valors.map(v=>v.equipamento,0);
    const nome = valores.map(n=>n.equipamento);
    console.log(valores);
    console.log(valors);
    this.setState(prevState => ({
      ...prevState,
      options: {...prevState.options,xaxis:{categories: nome}}
    }));
    /* this.setState({
      serie:{name:stats}
    })
 */

  } 

  componentDidMount(){
    this.getOptionsRequisicaos();
  } 

  

  componentDidUpdate(prevProps,prevState){
    if(prevState != this.state){
      console.log("a");
    }

  }
  render() {
    console.log(this.state.series)
    return (
      
      <>

        <div className="conteiner">
          <div className='row'>

            <div className='col-lg-11'>
              
              <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={480} />
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default Barra;