import React, { useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import "./EditorHeader.css";
function EditorHeader({
  defaultLang = "Text",
  date = new Date().toDateString(),
}) {
  useEffect(()=> {
    document.querySelector("select").value = defaultLang;
  })
  const [{ lang, text }, dispatch] = useStateValue();
  // console.log(lang)
  const langChange = function (e) {
    

    e.preventDefault();
    dispatch({
      type: "CHANGE_LANG",
      lang: e.target.value,
    });
  };
  const langSupport = [
    "C/C++",
    "Python",
    "JavaScript",
    "Java",
    "HTML",
    "CSS",
    "XML",
    "Go",
    "Rust",
    "Text",
  ];
  return (
    <div className="eheader">
      <select className="eheader__dropdown" onChange={langChange}>
        {langSupport.map((option,id) => (
          <option key={id}>{option}</option>
        ))}
      </select>
      <p className="eheader__date">{date}</p>
    </div>
  );
}

export default EditorHeader;
