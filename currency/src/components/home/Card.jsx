/* eslint-disable react/prop-types */
import React from 'react';

// function that returns the linear regression of the data points passed to it as an array
// of objects with x and y properties (e.g. [{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}]).

function linearRegression(data) {
  const n = data.length;
  const sumX = data.reduce((sum, { x }) => sum + x, 0);
  const sumY = data.reduce((sum, { y }) => sum + y, 0);
  const sumXY = data.reduce((sum, { x, y }) => sum + (x * y), 0);
  const sumXX = data.reduce((sum, { x }) => sum + (x * x), 0);
  const slope = ((n * sumXY) - (sumX * sumY)) / ((n * sumXX) - (sumX * sumX));
  const intercept = (sumY - (slope * sumX)) / n;
  return { slope, intercept };
}

// slope * x + intercept = y
// y = mx + b

// eslint-disable-next-line react/prop-types
export default function Card({
  name, valueToday, valueYesterday, data,
}) {
  // eslint-disable-next-line react/prop-types
  const upperName = name.charAt(0).toUpperCase() + name.slice(1);

  const dates = [];
  data.forEach((element) => {
    const unixDate = new Date(element.fecha).getTime() / 1000;
    dates.unshift({ x: unixDate, y: element.valor });
  });
  console.log(name);
  console.log('DATEEEES', dates);

  const { slope, intercept } = linearRegression(dates);
  console.log(slope, intercept);

  const today = Math.floor(Date.now() / 1000);
  console.log('today', today);
  const tomorrow = today + 864;
  const predictValueToday = slope * today + intercept;
  const predictValueTomorrow = slope * tomorrow + intercept;

  // date to unix
  // const unixDate = new Date(date).getTime() / 1000;

  // dd-mm-yyyy
  // const localDate = new Date(date).toLocaleString('es-CL');

  return (
    <div className="flex h-full my-auto bg-[#2b2f34] p-10 rounded-lg drop-shadow-xl">
      <div className="flex flex-col">
        <p className="flex text-5xl text-[#1dca7f] font-bold mb-5">
          {upperName === 'Unidad de fomento (UF)' ? ('UF') : upperName}
        </p>
        <div className="flex flex-row gap-5 font-semibold">
          <div className="flex flex-col gap-2 font-semibold">
            <p className="text-[#05b2dc] font-['Roboto Mono']">
              Valor
            </p>
            <p className="text-[#05b2dc]">
              Tendencia
            </p>
            <p className="text-[#05b2dc]">
              Pronóstico hoy
            </p>
            <p className="text-[#05b2dc]">
              Pronóstico mañana
            </p>
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <div className="flex flex-row gap-4">
              <p className="text-white">
                {valueToday.toString()}
              </p>
              {valueToday > valueYesterday
                ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-[#1dca7f] stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                  </svg>
                )
                : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-[#c9301c] stroke-2 rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                  </svg>
                )}
            </div>
            <p className="text-white">
              {slope.toFixed(5)}
            </p>
            <p className="text-white">
              {predictValueToday.toFixed(3)}
            </p>
            <p className="text-white">
              {predictValueTomorrow.toFixed(3)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
