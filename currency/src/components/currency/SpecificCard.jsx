/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function SpecificCard({ data }) {
  return (
    <div>
      <p>
        {data.autor}
      </p>
      <p>
        {data.nombre}
      </p>
    </div>
  );
}
