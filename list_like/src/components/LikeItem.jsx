import "./Like.css";
import bootsImage from "../assets/img/boots.png";

const LikeItem = ({ id, isLike, name, category, onUpdate }) => {
  const clickLikeBtn = () => {
    onUpdate(id);
  };

  return (
    <div className="like">
      <div className="like-product-image">
        <img src={bootsImage} alt="Product" />
      </div>
      <div className="like-product-info">
        <div className="like-product-name">{name}</div>
        <button className="like-cancel-btn" onClick={clickLikeBtn}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default LikeItem;
