
import React, { useEffect, useState } from "react";

const DynamicTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedTime = now.toLocaleDateString("en-US", options);
    setCurrentTime(formattedTime);
  }, []);

  return <p className="md:text-base text-xs">{currentTime}</p>;
};

export default DynamicTime;
