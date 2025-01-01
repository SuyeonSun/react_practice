import "./App.css";
import ProductList from "./components/ProductList";
import LikeList from "./components/LikeList";
import { useEffect, useState } from "react";

const productData = [
  { id: 0, isLike: false, name: "부츠", category: "shoes" },
  { id: 1, isLike: false, name: "티셔츠1", category: "top" },
  { id: 2, isLike: false, name: "티셔츠2", category: "top" },
  { id: 3, isLike: false, name: "바지1", category: "bottom" },
  { id: 4, isLike: false, name: "바지2", category: "bottom" },
];

function App() {
  const [products, setProducts] = useState(productData);
  const [likes, setLikes] = useState([]);

  const onUpdate = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, isLike: !product.isLike }
          : product
      )
    );
  };

  useEffect(() => {
    setLikes(products.filter((product) => product.isLike));
  }, [products]);

  // useEffect(() => {
  //   console.log(likes);
  // }, [likes]);

  return (
    <div className="app">
      <div className="product-list">
        <ProductList products={products} onUpdate={onUpdate} />
      </div>
      <div className="like-list">
        <LikeList likes={likes} onUpdate={onUpdate} />
      </div>
    </div>
  );
}

export default App;
