import React, { Component } from 'react';
import axios from "axios";


class CustoTotal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: "",
    }
  }


  async getOptionsRequisicaos() {
    const requisicaos = await axios.get("http://localhost:1337/requisicaos");

    const data = requisicaos.data;

    const valores = data.reduce((acc,item)=>{
      	acc+= item.custo;
        return acc;
    },0)

    
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
              
              <h2>{this.state.total} ESC</h2>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default CustoTotal;