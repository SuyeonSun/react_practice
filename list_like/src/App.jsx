import "./App.css";
import ProductList from "./components/ProductList";
import LikeList from "./components/LikeList";
import { useEffect, useState } from "react";

const productData = [
  { id: 0, name: "부츠", category: "shoes" },
  { id: 1, name: "티셔츠1", category: "top" },
  { id: 2, name: "티셔츠2", category: "top" },
  { id: 3, name: "바지1", category: "bottom" },
  { id: 4, name: "바지2", category: "bottom" },
];

function App() {
  const [products, setProducts] = useState(() => {
    const savedLikes = localStorage.getItem("likes")
      ? JSON.parse(localStorage.getItem("likes"))
      : [];
    return productData.map((product) => ({
      ...product,
      isLike: savedLikes.includes(product.id),
    }));
  });

  const onUpdate = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, isLike: !product.isLike }
          : product
      )
    );
  };

  // 좋아요가 true인 제품만 저장
  useEffect(() => {
    const likedIds = products
      .filter((product) => product.isLike)
      .map((product) => product.id);
    localStorage.setItem("likes", JSON.stringify(likedIds));
  }, [products]);

  const likes = products.filter((product) => product.isLike);

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
