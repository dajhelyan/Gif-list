import React, { useEffect } from "react";

const Gif = (props) => {
  useEffect(() => {
    console.log("Render gif ");
  }, []);

  return <img src={props.url} />;
};

export default Gif;
