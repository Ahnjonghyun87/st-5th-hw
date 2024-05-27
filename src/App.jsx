import React, { useContext, useEffect, useState } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { FamilyContext } from "./context/FamilyContext";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  const texts = useContext(FamilyContext);

  const [setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <FamilyContext.Provider value={{ texts }}>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={onAddText} />
      <TextList />
    </FamilyContext.Provider>
  );
}

export default App;
