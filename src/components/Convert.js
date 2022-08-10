import React, { useEffect } from "react";

const Convert = (text, language) => {
  useEffect(() => {
    console.log("changed");
  }, [text, language]);
};

export default Convert;
