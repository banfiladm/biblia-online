// src/Components/SalmoComponent.jsx

import React, { useState, useEffect } from 'react';
import bibleData from '../bibleData';

function SalmoComponent() {
  const [salmoAleatorio, setSalmoAleatorio] = useState(null);

  useEffect(() => {
    const salmos = bibleData.filter((livro) => livro.abbrev === 'sl');
    const salmosCount = salmos[0].chapters.length;
    const salmoIndex = Math.floor(Math.random() * salmosCount);
    setSalmoAleatorio(salmos[0].chapters[salmoIndex]);
  }, []);

  return (
    <div>
      <h2>Salmo do Dia</h2>
      {salmoAleatorio ? (
        <div>
          {salmoAleatorio.map((versiculo, index) => (
            <p key={index}>
              {index + 1}. {versiculo}
            </p>
          ))}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default SalmoComponent;
