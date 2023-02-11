import React from 'react';
import Card from '../components/home/Card';

export default function Home() {
  return (
    <div className="bg-[#21242a] flex w-screen h-screen p-20">
      <header className="flex justify-between w-full">
        <h1 className="text-6xl text-[#1dca7f] font-['Roboto Mono'] font-bold ">Money Data</h1>
      </header>
      <Card
        name="Dolar"
        valueToday="5.000"
        valueYesterday="4.500"
      />
    </div>
  );
}
