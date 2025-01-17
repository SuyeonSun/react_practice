// import style from "./list.module.scss";
// import className from "classnames/bind";
// import { Link } from "react-router-dom";

// const cx = className.bind(style);

// const List = ({ webtoonList, isLoading }) => {
//   return (
//     <div className={cx("list-container")}>
//       {webtoonList.map((webtoon) => (
//         <Link key={webtoon.id} to={`/${webtoon.id}`} state={{ webtoon }}>
//           <img src={webtoon.thumbnail} />
//           <div className={cx("title-text")}>{webtoon.title}</div>
//           <div className={cx("author-text")}>
//             {webtoon.authors.map((author, index) => (
//               <span key={index}>
//                 {author} {index !== webtoon.authors.length - 1 ? "/" : null}
//               </span>
//             ))}
//           </div>
//           <div className={cx("score-text")}>9.91</div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default List;

import React from "react";
import style from "./list.module.scss";
import className from "classnames/bind";
import { Link } from "react-router-dom";

const cx = className.bind(style);

const List = ({ webtoonList, isLoading }) => {
  return (
    <div className={cx("list-container")}>
      {isLoading
        ? Array.from({ length: 30 }).map((_, index) => (
            <div key={index}>
              <div className={cx("skeleton", "thumbnail")}></div>
              <div className={cx("skeleton", "title")}></div>
              <div className={cx("skeleton", "author")}></div>
              <div className={cx("skeleton", "score")}></div>
            </div>
          ))
        : webtoonList.map((webtoon) => (
            <Link key={webtoon.id} to={`/${webtoon.id}`} state={{ webtoon }}>
              <img src={webtoon.thumbnail} alt="thumbnail" />
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
