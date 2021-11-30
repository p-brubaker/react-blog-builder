import React, { useState } from "react";

import Preview from "../../components/Preview/Preview";
import Editor from "../../components/Editor/Editor";

import "./Home.css";

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState("");
  const [font, setFont] = useState("architect");
  const [align, setAlign] = useState("center");
  const [text, setText] = useState("");
  const [subtitle, setSubtitle] = useState("");

  return (
    <main>
      <Preview
        title={title}
        subtitle={subtitle}
        align={align}
        text={text}
        font={font}
      />
      <Editor
        title={title}
        font={font}
        align={align}
        text={text}
        subtitle={subtitle}
        setTitle={setTitle}
        setFont={setFont}
        setSubtitle={setSubtitle}
        setAlign={setAlign}
        setText={setText}
      />
    </main>
  );
}
