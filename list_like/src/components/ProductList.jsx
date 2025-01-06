import { useState } from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = ({ products, onUpdate }) => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onChangeSelect = (e) => {
    setSelect(e.target.value);
  };

  // select, search 검색 함수 분리
  const getFilteredProduct = () => {
    let filtered =
      search === ""
        ? products
        : products.filter((product) => product.name.includes(search));

    if (select !== "") {
      filtered = filtered.filter((product) => product.category === select);
    }
    return filtered;
  };

  // filter state
  const filteredProducts = getFilteredProduct();

  return (
    <div className="product-list">
      <h4>마켓</h4>
      <div className="filter">
        <input
          value={search}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요"
        />
        <select value={select} onChange={onChangeSelect}>
          <option value="">전체</option>
          <option value="top">상의</option>
          <option value="bottom">하의</option>
          <option value="shoes">신발</option>
        </select>
      </div>
      <div className="product-wrapper">
        {filteredProducts.map((product) => {
          return (
            <ProductItem key={product.id} {...product} onUpdate={onUpdate} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
