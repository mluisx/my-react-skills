import React, { useState, useEffect } from "react";
import './App.css';

const heroImage = ["https://miro.medium.com/max/700/1*PDeEZW6eUSBL2GQ1H1XTLg.png",
 "https://blog.logrocket.com/wp-content/uploads/2019/11/React-Test-Renderer-nocdn.png"];

export default function Home() {
  const [activeIndex, setactiveIndex] = useState(0);
  const currentImageIndex = 0;
  useEffect(() => {
    setInterval(() => {
      currentImageIndex === 0 ? setactiveIndex(1) : setactiveIndex(0);
    }, 3000);
  });

  return (
    <div>
      <img
        className="featureImage"
        src={heroImage[activeIndex]}
        alt={"imageTitle"}
      />
    </div>
  );
}
