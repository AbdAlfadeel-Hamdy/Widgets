import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "Hi" },
];
const Translate = () => {
  const [language, selectedLanguage] = useState(options[0]);
  return (
    <Dropdown
      options={options}
      selected={language}
      onSelectedChange={selectedLanguage}
    />
  );
};

export default Translate;
