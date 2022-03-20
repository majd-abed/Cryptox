import React from "react";
import { Title,Container,Card } from "./";


const Trending = ({data}) => {

  return (
    <section className='pb-10'>
      <Container>
      <Title>Top 10 Cryptocurrencies in The world</Title>
      <div className='grid sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-x-5 gap-y-8 pt-5 px-5'>
        {data.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
          </Container>
    </section>
  );
};

export default Trending;
