import useWebtoons from "../../hooks/home/useWebtoons";

const Home = () => {
  const { data, isLoading, isError } = useWebtoons({ page: 1 });

  if (isLoading && data == null) {
    return <h1>로딩중...</h1>;
  }

  if (isError === true) {
    return <h1>Error!</h1>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {data.webtoons.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </div>
    </div>
  );
};

export default Home;
