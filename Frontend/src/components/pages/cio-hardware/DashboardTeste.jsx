import React, { Component } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import { connect } from "react-redux";
import { retrieveRequisicaos, deleteRequisicao } from "../../../conection/requisicaos/actions";


class DashboardTeste extends Component {
    componentDidMount() {
        this.props.retrieveRequisicaos();
      }
      
    render() {
        /* const data = [
            { name: "Facebook", value: 200000 },
            { name: "Instagram", value: 200000 },
            { name: "Twiter", value: 200000 },
        ] */
        const { requisicaos } = this.props;
        console.log(this.props.requisicaos);
        return (
            <>
                <div className="conteiner">
                    <div className="row">
                        <div className='col-lg-12'>
                            <h3>Social Media</h3>

                            <PieChart width={400} height={400}>
                                <Pie
                                    dataKey="custo"
                                    isAnimationActive={false}
                                    data={requisicaos.equipamento.nome_equipamento}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                />
                                <Tooltip />
                            </PieChart>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

const mapStateToProps = (state) => {

    return {
  
      requisicaos: state.requisicaos,
  
    };
  
  };

export default connect(mapStateToProps, { retrieveRequisicaos, deleteRequisicao })(DashboardTeste);