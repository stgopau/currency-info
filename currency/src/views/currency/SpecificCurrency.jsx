import { React, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

import SpecificCard from '../../components/currency/SpecificCard';

export default function SpecificCurrency() {
  const { code } = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);

  const baseURL = 'https://mindicador.cl/api';

  useEffect(() => {
    // add the data of every currency to the json object data
    axios.get(`${baseURL}/${code}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, [location.state]);

  return (
    <div className="bg-[#21242a] flex flex-col w-screen h-screen p-10">
      <div className="flex flex-col">
        <p className="flex text-5xl text-[#1dca7f] font-bold mb-5">
          {data.nombre}
        </p>
        <SpecificCard data={data} />
      </div>
    </div>
  );
}
