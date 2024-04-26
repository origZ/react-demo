import React, { memo, useEffect, useState } from "react";
import { ScrollIndicatorWrapper } from "./style";

const ScrollIndicator = memo(({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  if (loading) {
    return <div>加载中,请等待...</div>;
  }

  return (
    <ScrollIndicatorWrapper>
      <div className="top">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll">
          <div
            className="currentProgress"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
      <div className="progress">
        当前进度{`${Math.floor(scrollPercentage)}%`}
      </div>
    </ScrollIndicatorWrapper>
  );
});

export default ScrollIndicator;
