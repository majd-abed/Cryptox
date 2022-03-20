import { AiOutlineHome, AiOutlineBarChart, AiOutlineLineChart } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
export const linksData = [
  {
    id: 1,
    name: "Home",
    icon: <AiOutlineHome />,
    url: "/",
  },
  {
    id: 2,
    name: "Cryptocurrencies",
    icon: <AiOutlineBarChart/>,
    url: "/cryptocurrencies",
  },
  {
    id: 3,
    name: "Exchanges",
    icon: <AiOutlineLineChart/>,
    url: "/exchanges",
  },
  {
    id: 4,
    name: "News",
    icon: <BiNews/>,
    url: "/news",
  },
];
