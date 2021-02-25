import React, { useState, useRef } from "react";
import Header from "../Header/Header";
import "./designTool.css";
import { v4 } from "uuid";
const fonts = [
  {
    id: v4(),
    font: "Arial",
  },
  {
    id: v4(),
    font: "Verdana",
  },
  {
    id: v4(),
    font: "Helvetica",
  },
  {
    id: v4(),
    font: "Times New Roman",
  },
];

let copyStyle = "";

const Designtool = () => {
  const [style, setStyle] = useState({
    font: "Arial",
    size: "16",
    bgColor: "#ffffff",
    fgColor: "#000000",
    bold: "",
    italic: "italic",
    underline: "underline",
  });

  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
    setTimeout(() => {
      setCopySuccess("");
    }, 1000);
  };
  // const changeHandler = (e, condition, value) => {
  //   console.log(condition);
  //   switch (condition) {
  //     case "f":
  //       setStyle([...style, { font: value }]);
  //       break;
  //     case "s":
  //       setStyle([...style, { size: value }]);
  //       break;
  //     case "bg":
  //       setStyle([...style, { bgColor: value }]);
  //       break;
  //     case "fg":
  //       setStyle([...style, { fgColor: value }]);
  //       break;
  //     // case "b":
  //     //   setStyle((style.bold = "bold"));
  //     //   break;
  //     // case "i":
  //     //   setStyle((style.italic = "italic"));
  //     //   break;
  //     // case "u":
  //     //   setStyle((style.underline = "underline"));
  //     //   break;
  //     default:
  //   }
  // };
  console.log(style);
  return (
    <div className="design-tool">
      <Header text="Design Tool" />
      <div>
        <select
          value={style.font}
          onChange={(e) => setStyle({ ...style, font: e.target.value })}
        >
          <option value="0">Select Font</option>
          {fonts.map((obj, i) => {
            return (
              <option key={obj.id} value={obj.font}>
                {obj.font}
              </option>
            );
          })}
        </select>
        &nbsp;&nbsp; FONT SIZE:
        <input
          type="number"
          value={style.size}
          style={{ width: "70px" }}
          onChange={(e) => setStyle({ ...style, size: e.target.value })}
        />{" "}
        &nbsp;&nbsp; BG COLOR{" "}
        <input
          type="color"
          value={style.bgColor}
          onChange={(e) => setStyle({ ...style, bgColor: e.target.value })}
        />{" "}
        &nbsp;&nbsp; FG COLOR
        <input
          type="color"
          value={style.fgColor}
          onChange={(e) => setStyle({ ...style, fgColor: e.target.value })}
        />{" "}
        &nbsp;&nbsp;
        <input
          type="button"
          value="B"
          className="text-decoration"
          onClick={() =>
            setStyle({ ...style, bold: !style.bold ? "bold" : "" })
          }
        />
        <input
          type="button"
          value="I"
          className="text-decoration"
          onClick={() =>
            setStyle({ ...style, italic: !style.italic ? "italic" : "" })
          }
        />
        <input
          type="button"
          value="U"
          className="text-decoration"
          onClick={() =>
            setStyle({
              ...style,
              underline: !style.underline ? "underline" : "",
            })
          }
        />
        {/* <span className="text-decoration">RA</span>&nbsp;&nbsp;
        <span className="text-decoration">CA</span>&nbsp;&nbsp;
        <span className="text-decoration">LA</span> */}
      </div>
      <div
        style={{
          width: "200px",
          border: "2px solid grey",
          padding: "2%",
          margin: "2%",
        }}
      >
        <p
          style={{
            fontFamily: style.font,
            fontSize: `${style.size}px`,
            backgroundColor: style.bgColor,
            color: style.fgColor,
            fontWeight: style.bold,
            fontStyle: style.italic,
            textDecoration: style.underline,
            textAlign: "center",
            padding: "5%",
          }}
        >
          Sample Text
        </p>
      </div>

      {/* <span
        style={{
          width: "300px",
          display: "block",
          marginLeft: "2%",
          lineHeight: "2",
          border: "2px solid grey",
          padding: "1%",
        }}
        ref={textAreaRef}
      >
        {`
            font-family: ${style.font};
            font-size: ${style.size}px;
            background-color: ${style.bgColor};
            color: ${style.fgColor};
            font-weight: ${style.bold};
            font-style: ${style.italic};
            text-decoration: ${style.underline};
          `}
      </span> */}

      <textarea
        style={{ lineHeight: "2" }}
        rows="5"
        cols="35"
        ref={textAreaRef}
        value={`font-family: ${style.font}; font-size: ${style.size}px; background-color: ${style.bgColor}; color: ${style.fgColor}; font-weight: ${style.bold}; font-style: ${style.italic}; text-decoration: ${style.underline};
          `}
      ></textarea>
      <br></br>
      <button onClick={copyToClipboard}>COPY STYLE</button>
      <span>{copySuccess}</span>
    </div>
  );
};

export default Designtool;
