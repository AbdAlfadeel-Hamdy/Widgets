import React, { useEffect } from "react";
import axios from "axios";
const Convert = ({ text, language }) => {
  useEffect(() => {
    axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        },
      }
    );
    console.log(language.value);
  }, [text, language]);
};

export default Convert;
