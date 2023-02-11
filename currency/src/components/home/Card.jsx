import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Card({ name, valueToday, valueYesterday }) {
  // eslint-disable-next-line react/prop-types
  const upperName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className="flex flex-wrap my-auto bg-[#2b2f34] p-10 rounded-lg drop-shadow-xl">
      <div className="flex flex-col">
        <p className="text-6xl text-[#1dca7f] font-bold mb-5">
          {upperName === 'Uf' ? ('UF') : upperName}
        </p>
        <div className="flex flex-row gap-5 font-semibold">
          <div className="flex flex-col gap-2 font-semibold">
            <p className="text-[#05b2dc] font-['Roboto Mono']">
              Hoy
            </p>
            <p className="text-[#05b2dc]">
              Ayer
            </p>
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <div className="flex flex-row gap-4">
              <p className="text-white">
                {valueToday}
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
              {valueYesterday}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
