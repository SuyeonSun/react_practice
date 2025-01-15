import style from "./list.module.scss";
import className from "classnames/bind";
import { Link } from "react-router-dom";

const cx = className.bind(style);

const List = ({ webtoonList }) => {
  return (
    <div className={cx("list-container")}>
      {webtoonList.map((webtoon) => (
        <Link key={webtoon.id} to={`/${webtoon.id}`} state={{ webtoon }}>
          <img src={webtoon.thumbnail} />
          <div className={cx("title-text")}>{webtoon.title}</div>
          <div className={cx("author-text")}>
            {webtoon.authors.map((author, index) => (
              <span key={index}>
                {author} {index !== webtoon.authors.length - 1 ? "/" : null}
              </span>
            ))}
          </div>
          <div className={cx("score-text")}>9.91</div>
        </Link>
      ))}
    </div>
  );
};

export default List;
