import React from 'react';
import Card from '../components/home/Card';

export default function Home() {
  const currencies = ['dolar', 'euro', 'bitcoin', 'uf'];
  return (
    <div className="bg-[#21242a] flex flex-col w-screen h-screen p-20">
      <header className="flex mb-20">
        <h1 className="text-6xl text-[#1dca7f] font-bold ">Money Data</h1>
      </header>
      <div className="flex grid grid-cols-4 gap-12">
        {currencies.map((currency) => (
          <Card
            name={currency}
            valueToday="5.000"
            valueYesterday="4.500"
          />
        ))}
      </div>
    </div>
  );
}
