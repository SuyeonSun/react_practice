import { useEffect, useState } from "react";
import Tab from "../components/home/Tab";
import List from "../components/home/List";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; // 상수는 컴포넌트 밖에 위치

const Home = () => {
  const [webtoonList, setWebtoonList] = useState([]);
  const [day, setDay] = useState(() => new Date().getDay());

  useEffect(() => {
    const dayString = DAYS[day];
    fetch(
      `https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/webtoons?provider=NAVER&page=1&perPage=30&sort=ASC&updateDay=${dayString}`
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
    const selectedDay = Number(e.target.value); // 문자열을 숫자로 변환
    setDay(selectedDay);
  };

  return (
    <div className="home-container">
      <Tab onHandleButtonClick={handleButtonClick} selectedBtn={day} />
      <List webtoonList={webtoonList} />
    </div>
  );
};

export default Home;
