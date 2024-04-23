import React, { memo, useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { SliderWrapper } from "./style";

const Slider = memo(({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  // 请求数据
  async function fetchImages(url) {
    try {
      setLoading(true);
      const res = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await res.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>加载中!请等待...</div>;
  }

  if (errorMsg !== null) {
    return <div>发生错误{errorMsg}</div>;
  }

  // 上一张
  function handlePre() {
    setCurrentSlider(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1
    );
  }
  // 下一张
  function handleNext() {
    setCurrentSlider(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1
    );
  }

  return (
    <SliderWrapper>
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePre} />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              className={
                currentSlider === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={currentSlider === index ? "dot" : "dot inactive-dot"}
                onClick={() => setCurrentSlider(index)}
              ></button>
            ))
          : null}
      </span>
    </SliderWrapper>
  );
});

export default Slider;
