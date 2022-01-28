import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrieveRequisicaos, deleteRequisicao } from "../../../conection/requisicaos/actions";


import { PieChart, Pie, Tooltip, Cell } from 'recharts';
class ListRequisicao extends Component {


  componentDidMount() {
    this.props.retrieveRequisicaos();
  }

  removeRequisicao = (id) => {

    this.props.deleteRequisicao(id).then(() => {

      this.props.retrieveRequisicaos();
      this.handleModalOpen();
    });

  };

  render() {

    const { requisicaos } = this.props;
    console.log(requisicaos);
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    }
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="end" />
            <div className="col-1">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">

                  <Link to={`${process.env.PUBLIC_URL}/`}>
                    <i class="fas fa-arrow-left" /> Voltar
                  </Link>

                </span>

              </div>
            </div>
            <div className="col-lg-12">
              <div className="end" />
              <h3 style={{ color: "#456caf" }}>Grafico de Requisicaos</h3>
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="custo"
                  isAnimationActive={false}
                  data={requisicaos}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>

              <PieChart width={400} height={400}>
                <Pie
                  data={requisicaos}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="custo"
                >{requisicaos.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}

                </Pie>
              </PieChart>


              <div className="end" />
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

export default connect(mapStateToProps, { retrieveRequisicaos, deleteRequisicao })(ListRequisicao);