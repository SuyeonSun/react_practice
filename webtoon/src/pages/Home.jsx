import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// TODO: 컴포넌트 분리
// TODO: SCSS 적용
const Home = () => {
  const [webtoonList, setWebtoonList] = useState([]);
  const [day, setDay] = useState("");
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  useEffect(() => {
    const todayDay = new Date().getDay();
    setDay(days[todayDay]);
  }, []);

  // TODO: axios 호출 방법? ex) async await
  useEffect(() => {
    axios
      .get(
        `https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/webtoons?provider=NAVER&page=1&perPage=30&sort=ASC&updateDay=${day}`
      )
      .then((res) => {
        setWebtoonList(res.data.webtoons);
      });
  }, [day]);

  const handleButtonClick = (e) => {
    setDay(days[e.target.value]);
  };

  return (
    <div>
      <h1>Webtoon List</h1>
      <div>
        <button onClick={handleButtonClick} value={1}>
          월
        </button>
        <button onClick={handleButtonClick} value={2}>
          화
        </button>
        <button onClick={handleButtonClick} value={3}>
          수
        </button>
        <button onClick={handleButtonClick} value={4}>
          목
        </button>
        <button onClick={handleButtonClick} value={5}>
          금
        </button>
        <button onClick={handleButtonClick} value={6}>
          토
        </button>
        <button onClick={handleButtonClick} value={0}>
          일
        </button>
      </div>
      <ul>
        {webtoonList.map((webtoon) => (
          <li key={webtoon.id}>
            {/* TODO: detail 페이지 새로고침 해도 데이터 초기화 안되는 이유? */}
            <Link to={`/${webtoon.id}`} state={{ webtoon }}>
              {webtoon.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
