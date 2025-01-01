import "./Product.css";
import bootsImage from "../assets/img/boots.png";

const ProductItem = ({ id, isLike, name, category, onUpdate }) => {
  const clickLikeBtn = () => {
    onUpdate(id);
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={bootsImage} alt="Product" />
      </div>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <button className="product-like-btn" onClick={clickLikeBtn}>
          {isLike ? "찜 취소" : "찜하기"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
