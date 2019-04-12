import React, {Component} from 'react';
import {primeraMayuscula} from '../Helper';
import Resultado from './Resultado';

class Resumen extends Component {
    
    mostrarResumen = () => {
        const {marca, year, plan} = this.props.datos
    
        if(!marca || !plan || !year) return null;
        return (
            <div className="resumen">

            <h2>Resumen de cotización</h2>
            <li>Marca: {primeraMayuscula(marca)}</li>
            <li>Año del auto: {primeraMayuscula(year)}</li>
            <li>Plan: {primeraMayuscula(plan)}</li>
            </div>
        )
    }
    render() {
       
        return(
           <div>
               {this.mostrarResumen()}
               <Resultado 
                    resultado={this.props.resultado}
               />
           </div>
        )
    }
}

export default Resumen;