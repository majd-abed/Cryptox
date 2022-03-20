import React, { useState, useEffect, useCallback } from "react";
import { GlobalData, Trending, Loading } from "../components";
import { GLOBAL_DATA, TRENDING_COINS } from "../api";
import axios from "axios";
import { useGlobal } from "../context";

const Home = () => {
  const { currency } = useGlobal();
  const [isLoading, setIsLoading] = useState(true);
  const [globalData, setGlobalData] = useState({});
  const [trendingData, setTrendingData] = useState([]);
  const fetchGlobalData = useCallback(async () => {
    const data = await axios.get(GLOBAL_DATA);
    setGlobalData(data.data.data);
    setIsLoading(false);
  },[]);
  //_____________________________________
  const fetchTrending = useCallback(async () => {
    const trending = await axios.get(TRENDING_COINS(currency.value));
    setTrendingData(trending.data);
  },[currency])
  useEffect(() => {
    fetchGlobalData();
    fetchTrending();
  }, [currency, fetchGlobalData,fetchTrending]);
  if (isLoading) return <Loading />;
  return (
    <main className='font-sans bg-slate-50'>
      <GlobalData data={globalData} />
      <Trending data={trendingData} />
    </main>
  );
};

export default Home;
