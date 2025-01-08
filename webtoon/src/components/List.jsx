import { Link } from "react-router-dom";

const List = ({ webtoonList }) => {
  return (
    <div>
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

export default List;
