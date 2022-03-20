const Description = ({ description }) => {
  return (
    <section>
      <p
        className=" description py-2 text-gray-900 font-medium text-md sm:text-lg  mdx:px-5"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  );
};

export default Description;
