import useWebtoons from "../../hooks/home/useWebtoons";
import { Button } from "@theshop/ui";
// import { Text } from "@theshop/ui";
import List from "../../components/home/List";

const Home = () => {
  const { data, isLoading, isError, refetch } = useWebtoons({ page: 1 });

  if (isLoading && data == null) {
    return <h1>로딩중...</h1>;
  }

  if (isError === true) {
    return <h1>Error!</h1>;
  }

  return (
    <div>
      {/* <Text size="title3" bold={true}>
        Webtoon List Home Page
      </Text> */}
      <List webtoonList={data?.webtoons} />
      <div>
        <Button
          color="adaptiveOpacity900"
          backgroundColor="adaptiveGrey200"
          outlineColor="adaptiveGrey800"
          size="md"
          full={false}
          onClick={refetch}
        >
          refetch
        </Button>
      </div>
    </div>
  );
};

export default Home;
