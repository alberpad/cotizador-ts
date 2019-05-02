import React, { useState } from 'react';
import { IInfoAuto } from '../interface';
import { primeraMayuscula } from '../services/helper';
import Resultado from './Resultado';

function Resumen({
  data,
  resultado
}: {
  data: IInfoAuto;
  resultado: string;
}): JSX.Element | null {
  const { marca, plan, year } = data;
  return marca ? (
    <div>
      <div className="resumen">
        <h2>Resumen de cotización</h2>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Plan: {primeraMayuscula(plan)}</li>
        <li>Año: {primeraMayuscula(year)}</li>
      </div>
      <Resultado resultado={resultado} />
    </div>
  ) : null;
}

export default Resumen;
