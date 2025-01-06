import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const webtoon = location.state?.webtoon;

  if (!webtoon) {
    return <div>No webtoon data available.</div>;
  }

  return (
    <div>
      <h1>Webtoon Detail</h1>
      <div>{webtoon.title}</div>
      <div>{webtoon.url}</div>
      <div>{webtoon.thumbnail}</div>
      <div>{webtoon.isEnd ? "end" : "not end"}</div>
      <div>{webtoon.isFree ? "free" : "not free"}</div>
      <div>
        {webtoon.authors.map((author, index) => (
          <span key={index}>{author}</span>
        ))}
      </div>
    </div>
  );
};

export default Detail;
