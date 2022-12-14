import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "Hi" },
];
const Translate = () => {
  const [language, selectedLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={selectedLanguage}
      />
      <hr />
      <div className="ui header">Output</div>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
