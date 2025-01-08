const Search = ({ onHandleButtonClick }) => {
  return (
    <div>
      <button onClick={onHandleButtonClick} value={1}>
        월
      </button>
      <button onClick={onHandleButtonClick} value={2}>
        화
      </button>
      <button onClick={onHandleButtonClick} value={3}>
        수
      </button>
      <button onClick={onHandleButtonClick} value={4}>
        목
      </button>
      <button onClick={onHandleButtonClick} value={5}>
        금
      </button>
      <button onClick={onHandleButtonClick} value={6}>
        토
      </button>
      <button onClick={onHandleButtonClick} value={0}>
        일
      </button>
    </div>
  );
};
export default Search;
