import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useGlobal } from "../context";
import { useParams } from "react-router-dom";
import { SINGLE_CRYPTO } from "../api";
import { Container, Loading, Description, Title, Chart } from "../components";
import clsx from "clsx";
import millify from "millify";

const Cryptocurrency = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [singleData, setSingleData] = useState({});
  const { cryptoId } = useParams();
  const { currency } = useGlobal();
  const fetchSingleCrypto = useCallback(async () => {
    const singleList = await axios.get(SINGLE_CRYPTO(cryptoId));
    setSingleData(singleList?.data);
    setIsLoading(false);
  }, [cryptoId]);
  useEffect(() => {
    fetchSingleCrypto();
  }, [currency,fetchSingleCrypto]);
  const {name, description, image, last_updated, market_data } = singleData;
  const list = [
    {
      text: "Current Price",
      value: market_data?.current_price[currency.value],
    },
    {
      text: "Total Volume",
      value: market_data?.total_volume[currency.value],
    },
    {
      text: "Price Change in 24h ",
      value: market_data?.price_change_percentage_24h,
    },
    {
      text: "Price Change in 7 Days",
      value: market_data?.price_change_percentage_7d,
    },
    {
      text: "Market Cap Change in 24h",
      value: market_data?.market_cap_change_percentage_24h,
    },
  ];
  if (isLoading) return <Loading />;
  return (
    <main className='bg-white font-sans mb-10'>
      <Container>
        <div className='lg:mx-12'>
          <div className=' flex items-center justify-center border-b py-4'>
            <div className='w-28 h-28 flex justify-center items-center my-2 rounded-full bg-white shadow-md'>
              <img src={image?.large} alt={name} className='w-26 h-26 m-2 p-2 ' />
            </div>
            <h1 className='text-3xl font-semibold text-blue-900 px-4'>{name}</h1>
          </div>
          <ul className='grid grid-cols-2 sm:grid-cols-3 py-5 gap-5  px-5'>
            {list.map((item, index) => {
              return (
                <li key={index} className='text-xl mdx:text-base'>
                  <p className='inline font-medium '>{item.text}:</p>

                  {index > 1 ? (
                    <p
                      className={clsx(
                        { "text-red-700": item.value < 0 },
                        { "text-green-700": item.value >= 0 },
                        "inline font-bold ml-1"
                      )}>
                      {item.value > 0 ? "+" : ""}
                      {millify(item.value || 0, { precision: 2 })}%
                    </p>
                  ) : (
                    <p className='inline ml-1 font-semibold'>
                      {millify(item.value || 0, { precision: 2 })}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>

          <div className='py-5 mb-3 flex justify-end border-b'>
            <p className='text-sm font-medium smx:text-xs mdx:px-5'>
              Last Updated: {new Date(last_updated).toUTCString()}
            </p>
          </div>
          <Chart currency={currency.value} cryptoId={cryptoId} name={name} />
          <Title>About {name}</Title>

          <Description description={description?.en} />
        </div>
      </Container>
    </main>
  );
};

export default Cryptocurrency;
