import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import millify from "millify";
import { EXCHANGES } from "../api";
import { Container, Loading, Title } from "../components";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { scrollToTop } from "../components/ScrollToTop";
import Pagination from "react-js-pagination";

const Exchanges = () => {
  const [page, setPage] = useState(1);
  const [exchangeData, setExchangeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchExchange = useCallback(async () => {
    const data = await axios.get(EXCHANGES(page));
    setExchangeData(data?.data);
    setIsLoading(false);
  }, [page]);
  useEffect(() => {
    fetchExchange();
    scrollToTop();
  }, [page, fetchExchange]);
  const ArrayHeader = ["Trust Score Rank", "Trade Volume 24h", "Year Established"];
  const handlePageChange = (p) => {
    setPage(p);
    setIsLoading(true);
  };
  if (isLoading) return <Loading />;
  return (
    <main className="bg-slate-50">
      <Container>
        <Title className='font-sans'>Cryptocurrency Exchanges Sorted By Trust Score</Title>
        <div className='overflow-x-auto font-sans'>
          <table className=' table-auto w-full border-collapse text-md '>
            <thead>
              <tr>
                <th className='border-b text-lg font-medium p-4 md:pl-12 pb-3 text-blue-800 text-left'>
                  Exchange
                </th>
                {ArrayHeader.map((item, index) => {
                  return (
                    <th
                      key={index}
                      className='border-b text-lg font-medium p-4 md:pl-8 pb-3 text-blue-800 text-center'>
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {exchangeData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className='flex items-center space-x-2 border-b font-medium p-4 md:pl-12 pb-3 text-gray-700 text-center'>
                      <img src={item.image} alt='' />
                      <span>{item.name}</span>
                    </td>
                    <td className='border-b font-medium p-4 md:pl-8 pb-3 text-gray-700 text-center'>
                      {item.trust_score_rank}
                    </td>
                    <td className='border-b font-medium p-4 md:pl-8 pb-3 text-gray-700 text-center'>
                      {millify(item.trade_volume_24h_btc)}
                    </td>
                    <td className='border-b font-medium p-4 md:pl-8 pb-3 text-gray-700 text-center'>
                      {item.year_established || "--"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='my-10'>
          <Pagination
            hideFirstLastPages={true}
            innerClass='flex justify-center item'
            itemClass='bg-white inline mx-4 px-[17px] py-2 rounded-full border border-blue-900 text-xl hover:bg-slate-50 hover:scale-[1.1] duration-300 font-semibold'
            prevPageText={<BiLeftArrow className='text-blue-900' />}
            nextPageText={<BiRightArrow className='text-blue-900' />}
            itemClassPrev='border-0 bg-transparent text-[1.7rem] hover:bg-transparent'
            itemClassNext='border-0 bg-transparent text-[1.7rem] hover:bg-transparent'
            activeClass='bg-slate-200 hover:bg-slate-300'
            activePage={page}
            itemsCountPerPage={50}
            totalItemsCount={250}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      </Container>
    </main>
  );
};

export default Exchanges;
