const CategoryPage = () => {
  return (
    <>
      <h1>Events in London</h1>
    </>
  );
};

export default CategoryPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");

  const allPaths = data.events_categories.map((el) => {
    return {
      params: {
        categories: el.id,
      },
    };
  });
  console.log("allpaths :", allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await import("/data/data.json");
  const id = context.params.categories;
  console.log("id", id);

  const filteredData = data.allEvents.filter((el) => {
    return el.city.toLowerCase() === id;
  });
  console.log("filtered:", filteredData);
  return {
    props: {
      data: filteredData,
    },
  };
}
