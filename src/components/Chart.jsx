import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { HISTORCAL_CHART } from "../api";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ cryptoId, currency, name }) => {
  const [chartData, setChartData] = useState([]);
  const [days, setDays] = useState(1);
  const [isLoading, setIsLoading] = useState(true)
  const fetchChart = async () => {
    const cData = await axios.get(HISTORCAL_CHART(cryptoId, days, currency));
    setChartData(cData?.data.prices);
    setIsLoading(false)
  };
  useEffect(() => {
    fetchChart();
  }, [currency,days]);
  const labels = chartData.map((item) => {
    const date = new Date(item[0]);
    return days.value === 1
      ? date.toLocaleTimeString("en")
      : date.toLocaleString("en", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        });
  });
  const data = {
    labels,
    datasets: [
      {
        label: `Price`,
        data: chartData.map((item) => item[1]),
        backgroundColor: "#fff",
        borderColor: "#1e3a8a",
        borderWidth: 2.2,
        fill: false,
        tension: 0.5,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${name}`,
      },
    },
    elements: {
      point: {
        radius: 1.5,
      },
    },
    maintainAspectRatio: false,
  };
  const chartDays = [
    {
      label: "24 Hours",
      value: 1,
    },
    {
      label: "30 Days",
      value: 30,
    },
    {
      label: "3 Months",
      value: 90,
    },
    {
      label: "1 Year",
      value: 365,
    },
  ];
  if(isLoading) return <div className=" w-fit mx-auto pt-10">
    <ClipLoader color='#1e3a8a' size={180}/>
  </div> 
  return (
    <>
      <div className=' lg:px-16 pb-3 min-h-[75vh]'>
        <Line data={data} options={options} />
      </div>
      <div className='flex justify-center'>
        {chartDays.map((day) => {
          return (
            <button
              key={day.value}
              onClick={() => {
                setDays(day.value);
              }}
              className='border-2 border-blue-900 px-3 py-2 lg:mx-5 lgx:mx-1 w-26 bg-slate-50 rounded-md hover:bg-slate-200 duration-300 font-medium'>
              {day.label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Chart;
