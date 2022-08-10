import React, { useEffect, useState } from "react";
import axios from "axios";
const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
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
      setTranslated(data.data.translations[0].translatedText);
      console.log(data);
    };
    doTranslation();
  }, [text, language]);
  return <h1 className="ui header">{translated}</h1>;
};

export default Convert;
