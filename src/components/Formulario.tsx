import React, { useRef, MutableRefObject } from 'react';
import { IInfoAuto } from '../interface';
function Formulario({
  cotizarSeguro
}: {
  cotizarSeguro: (infoAuto: IInfoAuto) => void;
}): JSX.Element {
  const marcaRef = useRef<HTMLSelectElement>(null);
  const yearRef = useRef<HTMLSelectElement>(null);
  const planBasicoRef = useRef<HTMLInputElement>(null);
  const planCompletoRef = useRef<HTMLInputElement>(null);

  function handleCotizarSeguro(e: React.FormEvent) {
    e.preventDefault();
    let plan: string = '';
    if (planCompletoRef && planCompletoRef.current) {
      plan = planCompletoRef.current.checked ? 'completo' : 'basico';
    }
    const infoAuto: IInfoAuto = {
      marca: marcaRef && marcaRef.current ? marcaRef.current.value : '',
      year: yearRef && yearRef.current ? yearRef.current.value : '',
      plan: plan
    };
    cotizarSeguro(infoAuto);
    // e.currentTarjet.reset();
    const formulario = e.currentTarget as HTMLFormElement;
    //formulario.reset();
  }

  return (
    <form className="cotizar-auto" onSubmit={handleCotizarSeguro}>
      <div className="campo">
        <label>Marca</label>
        <select name="marca" ref={marcaRef}>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </select>
      </div>

      <div className="campo">
        <label>Año</label>
        <select name="year" ref={yearRef}>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
        </select>
      </div>
      <div className="campo">
        <label>Plan:</label>
        <input
          type="radio"
          name="plan"
          value="basico"
          ref={planBasicoRef}
        />{' '}
        Básico
        <input
          type="radio"
          name="plan"
          value="completo"
          ref={planCompletoRef}
        />{' '}
        Completo
      </div>

      <button type="submit" className="boton">
        Cotizar
      </button>
    </form>
  );
}
export default Formulario;
