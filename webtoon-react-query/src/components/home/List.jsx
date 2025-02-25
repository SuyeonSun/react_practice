const List = ({ webtoonList }) => {
  return (
    <div>
      {webtoonList.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </div>
  );
};

export default List;
