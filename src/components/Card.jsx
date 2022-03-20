import React from "react";
import millify from "millify";
import clsx from "clsx";
import { Link } from "react-router-dom";
const Card = ({
  id,
  name,
  image,
  current_price,
  market_cap,
  price_change_percentage_24h,
  price_change_percentage_1h_in_currency,
}) => {
  const numbers = [
    {
      title: "Price",
      number: current_price,
    },
    {
      title: "Market Cap",
      number: market_cap,
    },
    {
      title: "Daily Change",
      number: price_change_percentage_24h,
    },
    {
      title: "1h Change",
      number: price_change_percentage_1h_in_currency,
    },
  ];

  return (
    <Link
      to={`/cryptocurrency/${id}`}
      className='shadow-md shadow-gray-900/20 hover:shadow-lg
    hover:shadow-gray-900/30 duration-300 bg-white'>
      <div className='relative z-0'>
        <div className=' w-fit mx-auto pt-4 pb-1 text-lg font-Cairo font-semibold'>{name}</div>
        <div className=' h-1 w-full border-t-2 absolute translate-y-12 -z-10'></div>
        <div className=' flex justify-center items-center w-20 h-20 border-2 mx-auto my-2 rounded-full bg-white'>
          <img src={image} alt={name} className='w-12 h-12' />
        </div>
      </div>
      <ul className='pl-2'>
        {numbers.map((item, index) => {
          return (
            <li key={index} className='pb-4 text-[16.5px]'>
              <p className='inline font-medium '>{item.title} :</p>

              {index > 1 ? (
                <p
                  className={clsx(
                    { "text-red-700": item.number < 0 },
                    { "text-green-700": item.number >= 0 },
                    "inline font-bold ml-1"
                  )}>
                  {item.number > 0 ? "+" : ""}
                  {millify(item.number || 0, { precision: 2 })}%
                </p>
              ) : (
                <p className='inline ml-1 font-semibold'>
                  {millify(item.number || 0, { precision: 2 })}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </Link>
  );
};

export default Card;
