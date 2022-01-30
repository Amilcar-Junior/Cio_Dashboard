import React, { Component } from 'react';
import axios from "axios";


class TotalEquipamento extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: "",
    }
  }


  async getOptionsRequisicaos() {
    const equipamentos = await axios.get("http://localhost:1337/equipamentos");

    const data = equipamentos.data;

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
              
              {this.state.total}
              
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default TotalEquipamento;