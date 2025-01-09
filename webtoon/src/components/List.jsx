import "./List.scss";
import { Link } from "react-router-dom";

const List = ({ webtoonList }) => {
  return (
    <div className="list-container">
      {webtoonList.map((webtoon) => (
        <Link to={`/${webtoon.id}`} state={{ webtoon }}>
          <img src={webtoon.thumbnail} />
          <div className="title-text">{webtoon.title}</div>
          <div className="author-text">
            {webtoon.authors.map((author, index) => (
              <span key={index}>
                {author} {index !== webtoon.authors.length - 1 ? "/" : null}
              </span>
            ))}
          </div>
          <div className="score-text">9.91</div>
        </Link>
      ))}
    </div>
  );
};

export default List;
