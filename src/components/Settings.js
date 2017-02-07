import React, { Component } from 'react';

import styles from './Settings.module.css';
import { COLORS, IDLE, FORWARDED, IGNORED, PLAYING } from '../constants';

function percent(nodes, fromState) {
  const count = nodes.filter(
    ({ state }) => state === fromState
  ).length;

  return Math.round(
    100. / nodes.length * count
  );
}

export default function Settings({
  avarageConsciousness, onChangeConsciousness,
  nodes, simulationState, onReset
}) {
  const ignored = percent(nodes, IGNORED);
  const forwarded = percent(nodes, FORWARDED);
  return (
    <div className={ styles.container }>
      <div className={ styles.settings }>
        <div className={ styles.range }>
          { COLORS.map(color => 
            <span
              key={ color }
              style={{ background: color }}
            />
          ) }
        </div>
        <input
          className={ styles.slider }
          type={ 'range' }
          defaultValue={ avarageConsciousness }
          onInput={ (event) => onChangeConsciousness(event.target.value) }
          min={ 0 }
          max={ 1 }
          step={ 0.1 }
        />
        <div className={ styles.helpText }>
          Avarage consciousness (%{ avarageConsciousness * 100 })
        </div>
      </div>
      <div className={ styles.stats }>
        <div className={ styles.ignored }>
          <span className={ styles.icon }></span>
          <span className={ styles.info }>Ignored (%{ ignored })</span>
        </div>
        <div className={ styles.forwarded }>
          <span className={ styles.icon }></span>
          <span className={ styles.info }>Forwarded (%{ forwarded })</span>
        </div>
      </div>
      <div className={ styles.controllers }>
        <div className={ styles.description }>
          <p>Click a node to start broadcasting a disinformation.</p>
          <input
            className={ styles.button }
            type={ 'submit' }
            disabled={ simulationState !== PLAYING }
            value={ 'Reset' }
            onClick={ onReset }
           />
        </div>
      </div>
    </div>
  );
}
