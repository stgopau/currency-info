import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Card({ name, valueToday, valueYesterday }) {
  return (
    <div className="flex flex-wrap my-auto bg-[#2b2f34] p-10 rounded-lg drop-shadow-xl">
      <div className="flex flex-col">
        <p className="text-6xl text-[#1dca7f] font-bold mb-5">
          {name}
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
            <div className="flex flex-row">
              <p className="text-white">
                {valueToday}
              </p>
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
