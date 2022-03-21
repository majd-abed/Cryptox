import React, { useEffect, useState, useCallback } from "react";
import { Title, Container, Card, Loading } from "../components";
import { useGlobal } from "../context";
import { COIN_LIST } from "../api";
import Pagination from "react-js-pagination";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { scrollToTop } from "../components/ScrollToTop";
import axios from "axios";

const Cryptocurrencies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coinListData, setCoinListData] = useState([]);
  const [page, setPage] = useState(1);
  const { currency } = useGlobal();

  const fetchCryptoList = useCallback(async () => {
    const coinList = await axios.get(COIN_LIST(currency.value, page));
    setCoinListData(coinList.data);
    setIsLoading(false);
  }, [currency, page]);
  useEffect(() => {
    fetchCryptoList();
    scrollToTop();
  }, [currency, page, fetchCryptoList]);
  const handlePageChange = (p) => {
    setPage(p);
    setIsLoading(true);
  };
  if (isLoading) return <Loading />;
  return (
    <section className='bg-slate-50 font-sans'>
      <Container>
        <Title>Cryptocurrencies</Title>

        <div className='grid sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-x-5 gap-y-8 pt-5 px-5'>
          {coinListData.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
        <div className='py-12'>
          <Pagination
            hideFirstLastPages={true}
            innerClass='flex justify-center item'
            itemClass='bg-white inline mx-4 smx:mx-1 px-[17px] py-2
            smx:px-[13px] smx:py-1 rounded-full border border-blue-900 text-xl smx:text-md hover:bg-slate-50 hover:scale-[1.1] duration-300 font-semibold'
            prevPageText={<BiLeftArrow className="text-blue-900"/>}
            nextPageText={<BiRightArrow className="text-blue-900"/>}
            itemClassPrev='border-0 bg-transparent text-[1.7rem] -pr-4'
            itemClassNext='border-0 bg-transparent text-[1.7rem] -ml-4'
            activeClass='bg-slate-200 hover:bg-slate-300'
            activePage={page}
            itemsCountPerPage={50}
            totalItemsCount={250}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      </Container>
    </section>
  );
};

export default Cryptocurrencies;
