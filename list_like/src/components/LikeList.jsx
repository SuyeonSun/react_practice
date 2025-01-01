import LikeItem from "./LikeItem";

const LikeList = ({ likes, onUpdate }) => {
  return (
    <div className="like_list">
      <h4>찜한 상품</h4>
      <div className="like-wrapper">
        {likes.map((product) => {
          return <LikeItem key={product.id} {...product} onUpdate={onUpdate} />;
        })}
      </div>
    </div>
  );
};

export default LikeList;
