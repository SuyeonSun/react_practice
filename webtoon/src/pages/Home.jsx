import { useEffect, useState } from "react";
import Search from "../components/Search";
import List from "../components/List";

const Home = () => {
  const [webtoonList, setWebtoonList] = useState([]);
  const [day, setDay] = useState("");
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  useEffect(() => {
    const todayDay = new Date().getDay();
    setDay(days[todayDay]);
  }, []);

  useEffect(() => {
    if (!day) return;
    fetch(
      `https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/webtoons?provider=NAVER&page=1&perPage=30&sort=ASC&updateDay=${day}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setWebtoonList(data.webtoons);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [day]);

  const handleButtonClick = (e) => {
    setDay(days[e.target.value]);
  };

  return (
    <div>
      <h1>Webtoon List</h1>
      <Search onHandleButtonClick={handleButtonClick} />
      <List webtoonList={webtoonList} />
    </div>
  );
};

export default Home;
