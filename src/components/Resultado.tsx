import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Resultado({ resultado }: { resultado: string }) {
  return (
    <div className="gran-total">
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={resultado}
          timeout={{ enter: 500, exit: 500 }}
        >
          <span>{resultado}</span>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Resultado;
