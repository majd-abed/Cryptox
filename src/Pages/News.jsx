import React, { useEffect, useState } from "react";
import { Container, Loading, Title } from "../components";
import { FaArrowRight } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import moment from "moment";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    var axios = require("axios").default;
    var options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: "cryptocurrency",
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "891c01a84bmsh1b88d1d57920564p1e67a0jsn1f61cd970408",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response?.data.value);
        const ndata = response?.data.value;
        setNewsData(ndata);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);
  if (isLoading) return <Loading />;
  if (isError)
    return (
      <Container>
        <div className="flex flex-col justify-center items-center m-auto w-fit my-8 font-sans">
          <FaTimes className='h-16 w-16 text-red-600'/>
          <p className="text-2xl font-semibold">Access forbidden due to the US restrictions on your country</p>
          <p className="self-end font-semibold text-sm text-gray-500 pt-3">Use a VPN service to access this section</p>
        </div>
      </Container>
    );
  return (
    <main className='font-sans bg-slate-50'>
      <Container>
        <Title>Latest Cryptocurrencies News:</Title>
        <div className='grid grid-cols-2 lgx:grid-cols-1 gap-5 lg:mx-12 px-2'>
          {newsData.map((item, index) => {
            const imglink = item?.image?.thumbnail?.contentUrl || "/alt.webp";
            return (
              <div key={index}>
                <div className='flex border border-b-0 rounded-t-md overflow-hidden bg-white pb-2'>
                  <div className='overflow-hidden w-24 h-24 '>
                    <img src={imglink} alt='' className='blur-[0.8px]' />
                  </div>
                  <div className='flex-1 flex flex-col items-start pt-2'>
                    <h1 className='text-xl font-semibold p-2'>{item?.name}</h1>
                  </div>
                </div>
                <div className='px-3 border border-t-0 rounded-b-md bg-white'>
                  <span className='text-sm text-gray-600'>
                    {moment(item?.datePublished).startOf("ss").fromNow()}
                  </span>
                  <div className='pt-2'>{item?.description}</div>
                  <div className='m-2'>
                    <div className='flex items-center'>
                      <div className='overflow-hidden w-7 h-7'>
                        <img
                          src={item?.provider[0]?.image?.thumbnail?.contentUrl}
                          alt=''
                        />
                      </div>
                      <div className='flex-1 flex items-center justify-between'>
                        <h1 className='text-md font-bold pl-3 smx:text-sm smx:pl-1'>
                          {item?.provider[0]?.name}
                        </h1>
                        <a
                          href={item?.url}
                          target='_blank'
                          rel='noreferrer'
                          className='flex items-center text-blue-600 group'>
                          <span className='pr-1'>Read More</span>
                          <FaArrowRight className='group-hover:animate-pulse group-hover:translate-x-1 group-hover:scale-[1.2] duration-200' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </main>
  );
};

export default News;
