import React, { memo, useEffect, useState } from "react";
import { LoadMoreWrapper } from "./style";

const LoadMoreData = memo(() => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

  async function fetchProducts() {
    try {
      setLoading(true);
      const responce = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const res = await responce.json();

      if (res && res.products && res.products.length) {
        setProducts((preData) => [...preData, ...res.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);
  useEffect(() => {
    if (products && products.length === 100) setIsShow(false);
  }, [products]);

  if (loading) {
    return <div>加载中!请等候...</div>;
  }

  return (
    <LoadMoreWrapper>
      <div className="container">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="product">
                <img src={item.thumbnail} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="load">
        {isShow ? (
          <button onClick={() => setCount(count + 1)}>加载更多</button>
        ) : (
          <p>已加载全部</p>
        )}
      </div>
    </LoadMoreWrapper>
  );
});

export default LoadMoreData;
