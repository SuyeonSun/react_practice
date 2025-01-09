import "./Search.scss";

const Search = ({ onHandleButtonClick, selectedBtn }) => {
  return (
    <div className="search-container">
      <button
        onClick={onHandleButtonClick}
        value={1}
        className={selectedBtn == 1 ? "selected-btn" : ""}
      >
        월
      </button>
      <button
        onClick={onHandleButtonClick}
        value={2}
        className={selectedBtn == 2 ? "selected-btn" : ""}
      >
        화
      </button>
      <button
        onClick={onHandleButtonClick}
        value={3}
        className={selectedBtn == 3 ? "selected-btn" : ""}
      >
        수
      </button>
      <button
        onClick={onHandleButtonClick}
        value={4}
        className={selectedBtn == 4 ? "selected-btn" : ""}
      >
        목
      </button>
      <button
        onClick={onHandleButtonClick}
        value={5}
        className={selectedBtn == 5 ? "selected-btn" : ""}
      >
        금
      </button>
      <button
        onClick={onHandleButtonClick}
        value={6}
        className={selectedBtn == 6 ? "selected-btn" : ""}
      >
        토
      </button>
      <button
        onClick={onHandleButtonClick}
        value={0}
        className={selectedBtn == 0 ? "selected-btn" : ""}
      >
        일
      </button>
    </div>
  );
};
export default Search;
