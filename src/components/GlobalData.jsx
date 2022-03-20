import React from "react";
import { Title, Container } from "./";
import millify from "millify";
import { useGlobal } from "../context";
const GlobalData = ({data}) => {
  const { currency } = useGlobal();
  const globalList = [
    {
      id: 1,
      text: "Active Cryptocurrencies",
      value: data.active_cryptocurrencies,
    },
    {
      id: 2,
      text: "Total market cap",
      value: data.total_market_cap?.[currency.value],
    },
    {
      id: 3,
      text: "Markets",
      value: data.markets,
    },
    {
      id: 4,
      text: "Total volume",
      value: data.total_volume?.[currency.value],
    },
  ];
  return (
    <section>
      <Container>
        <Title>Global Crypto State</Title>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 py-5'>
          {globalList.map((item) => {
            return (
              <div key={item.id} className='text-lg font-medium pl-10'>
                <div>{item.text} :</div>
                <div className='font-Cairo text-blue-900 pl-2 text-2xl'>
                  {millify(item.value || 0)}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default GlobalData;
