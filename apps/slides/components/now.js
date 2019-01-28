import React from 'react';

export default function Now({ as: RenderedComponent = `h2` }) {
  return <RenderedComponent>{process.env.WORKSHOP_DATE}</RenderedComponent>;
}
