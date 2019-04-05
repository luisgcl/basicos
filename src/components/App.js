import React, { Component } from 'react';
import '../css/App.css';
import Formulario from './Formulario';
import Header from './Header';
import Resumen from './Resumen';

import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../Helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      datos: {}
    }
  }

    cotizarSeguro = (datos) => {
      const {marca, plan, year} = datos;

      //agregar una base de 2000
      let resultado = 2000;

      //obtener la diferencia de años y
      const diferencia = obtenerDiferenciaAnio(year);

      // console.log(diferencia);

      //por cada año restar el 3% al valor del seguro
      resultado -= ((diferencia * 3) * resultado ) / 100;

      // console.log(resultado);

      //Americano 15% Asiatico 5% Europeo 30% de incremento al valor actual
      resultado = calcularMarca(marca) * resultado;

      // console.log(resultado);

      //El plan del auto, el básico incrementa el balor un 20% y cobertura completa un 50%
      let incrementoPlan = obtenerPlan(plan);
        // console.log(incrementoPlan);

      //dependiendo del plan incrementar
      resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
      // console.log(resultado);

      //crear objeto para el resumen
      const datosAuto = {
        marca: marca,
        plan: plan,
        year: year

       
      }
       //ya tenemos el costo
       this.setState({
        resultado : resultado,
        datos : datosAuto
      })
      console.log(datosAuto);
    }

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de auto"/>
      
      <div className="contenedor-formulario">
        <Formulario 
          cotizarSeguro={this.cotizarSeguro}
        />
        <Resumen 
          datos={this.state.datos}
        />
      </div>
      
      </div>
    );
  }
}

export default App;
