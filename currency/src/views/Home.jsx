import { React, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import Card from '../components/home/Card';

export default function Home() {
  const currencies = ['dolar', 'euro', 'bitcoin', 'uf'];
  const [data, setData] = useState([]);

  const baseURL = 'https://mindicador.cl/api';

  useEffect(() => {
    // add the data of every currency to the json object data
    currencies.forEach((currency) => {
      axios.get(`${baseURL}/${currency}`)
        .then((response) => {
          // if currency not in data, add it
          if (!data.some((item) => item.codigo === response.data.codigo)) {
            setData((oldData) => [...oldData, response.data]);
          }
        });
      // .catch((error) => {
      //   console.log(error);
      // });
    });
  }, []);

  return (
    <div className="bg-[#21242a] flex flex-col w-screen h-screen p-20">
      <header className="flex mb-32">
        <h1 className="text-8xl text-[#1dca7f] font-bold ">Money Data</h1>
      </header>
      <div className="flex grid grid-cols-4 gap-12">
        {data.map((currency) => (
          <Card
            key={currency.codigo}
            name={currency.nombre}
            valueToday={currency.serie[0].valor}
            valueYesterday={currency.serie[1].valor}
            data={currency.serie}
          />
        ))}
      </div>
    </div>
  );
}
