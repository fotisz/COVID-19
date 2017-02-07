import React, { Component } from 'react';

import { padding } from '../utils';
import { IDLE } from '../constants';

export default function Edge({
  source, target, current, width, height,
  nodes, onlyCurrent
}) {
  const [targetNode] = nodes.filter(({ id }) => id === target.id);
  const [sourceNode] = nodes.filter(({ id }) => id === source.id);

  const isCurrent = (
    source.id === current ||
    target.id === current ||
    targetNode.state !== IDLE || 
    sourceNode.state !== IDLE
  );

  if (onlyCurrent && !isCurrent) {
    return <g></g>;
  }

  return (
    <g key={ `${source.id}-${target.id}` }>
      <line
        x1={ padding(source.x, width, 7) }
        y1={ padding(source.y, height, 30) } 
        x2={ padding(target.x, width, 7) }
        y2={ padding(target.y, height, 30) }
        stroke={ isCurrent ? '#ccc' : '#eff3ff' }
        strokeWidth={ isCurrent ? 0.9 : 0.5 }
      />
    </g>
  );
}