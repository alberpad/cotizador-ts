import React, { Component, useState } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Formulario from './Formulario';
import { IInfoAuto } from '../interface';
import {
  obtenerDiferenciaAnio,
  calcularMarca,
  obtenerPlan
} from '../services/helper';
import Resumen from './Resumen';
import Resultado from './Resultado';

function App(): JSX.Element {
  const [resultado, setResultado] = useState('');
  const [datosAuto, setDatosAuto] = useState<IInfoAuto>({
    marca: '',
    year: '',
    plan: ''
  });

  function cotizarSeguro(datos: IInfoAuto) {
    const { marca, year, plan } = datos;
    let resultado: number | string = 2000;
    const diferencia: number = obtenerDiferenciaAnio(year);
    resultado -= (diferencia * 3 * resultado) / 100;
    resultado = calcularMarca(marca) * resultado;
    let incrementoPlan: number = obtenerPlan(plan);
    resultado = (incrementoPlan * resultado).toFixed(2);
    setResultado(resultado);
    setDatosAuto({ marca, plan, year });
  }
  {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de auto" />
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={cotizarSeguro} />
          <Resumen data={datosAuto} resultado={resultado} />
        </div>
      </div>
    );
  }
}

export default App;
