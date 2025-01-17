import { useEffect, useState } from "react";
import Tab from "../components/home/Tab";
import List from "../components/home/List";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Home = () => {
  const [webtoonList, setWebtoonList] = useState([]);
  const [day, setDay] = useState(() => new Date().getDay());
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 초기화

  useEffect(() => {
    const dayString = DAYS[day];
    setIsLoading(true); // 로딩 상태 활성화
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
        setIsLoading(false); // 로딩 상태 비활성화
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setIsLoading(false); // 로딩 상태 비활성화
      });
  }, [day]);

  const handleButtonClick = (e) => {
    const selectedDay = Number(e.target.value);
    setDay(selectedDay);
  };

  return (
    <div className="home-container">
      <Tab onHandleButtonClick={handleButtonClick} selectedBtn={day} />
      {/* 로딩 상태 props 전달 */}
      <List webtoonList={webtoonList} isLoading={isLoading} />
    </div>
  );
};

export default Home;
