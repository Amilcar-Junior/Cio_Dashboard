import React, { Component } from 'react';
import axios from "axios";


class TotalRequisicoes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: "",
    }
  }


  async getOptionsRequisicaos() {
    const requisicaos = await axios.get("http://localhost:1337/requisicaos");

    const data = requisicaos.data;

    const valores = data.length;
    console.log(valores);
    this.setState({
      total: valores
    });


  } 

  componentDidMount(){
    this.getOptionsRequisicaos();
  } 

  
  render() {
    
    return (
      
      <>

        <div className="conteiner">
          <div className='row'>

            <div className='col-lg-12'>
              
              <h2>{this.state.total}</h2>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default TotalRequisicoes;