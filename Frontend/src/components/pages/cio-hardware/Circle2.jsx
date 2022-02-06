import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import axios from "axios";

class Circle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [],
        colors:['#ff0000', '#ff9300', '#00b800','#0058bd','#2300ac', '#8800b1', '#ff0078', '#00a4c5'],
      },
      series: [],
    }
  }


  async getOptionsRequisicaos() {
    const requisicaos = await axios.get("http://localhost:1337/requisicaos");

    const data = requisicaos.data;

    const valores = data.reduce((acc,item)=>{
      	const exists = acc.find(element=>element.equipamento === item.equipamento.agencia);
        if(exists){
          exists.custo+=item.custo;
          return acc;
        }
        acc.push({custo: item.custo, equipamento: item.equipamento.agencia})
        return acc;
    },[])

    const custo = valores.map(a=>a.custo);
    const agencia = valores.map(n=>n.equipamento);
    console.log(valores);
    this.setState(prevState => ({
      ...prevState,
      series: custo,
      options: {...prevState.options,labels: agencia}
    }));


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
    
    return (
      
      <>

        <div className="conteiner">
          <div className='row'>

            <div className='col-lg-12'>
              <div className="donut">
                <Chart options={this.state.options} series={this.state.series} type="pie" width="480" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default Circle;