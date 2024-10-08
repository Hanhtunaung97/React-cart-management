import React, { useContext, useEffect, useRef } from "react";
import { dataContext } from "../contexts/DataContext";

const AnimateImage = ({ src, info, setAnimate }) => {
  const style = {
    width: info.width + "px",
    height: info.height + "px",
    left: info.left + "px",
    top: info.top + "px",
  };
  const imgRef = useRef();
  const { cartBtnInfo } = useContext(dataContext);
  useEffect(() => {
    const keyframe = [
      {
        top: info.top + "px",
        left: info.left + "px",
      },
      {
        top: cartBtnInfo.top + 10 + "px",
        left: cartBtnInfo.left + 10 + "px",
        height: 10 + "px",
        width: 10 + "px",
        rotate: "2turn",
      },
    ];
    const options = {
      duration: 500,
      iterations: 1,
      fill: "both",
    };

    const animation = imgRef.current.animate(keyframe, options);
    const animationEnd = () => {
      setAnimate(false);
    };
    animation.addEventListener("finish", animationEnd);
    return () => {
      animation.removeEventListener("finish", animationEnd);
    };
  }, []);
  return <img src={src} ref={imgRef} style={style} className="fixed z-50" />;
};

export default AnimateImage;
