import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { onAddTexts } from "./redux/slices/textsSlices";

function App() {
  const texts = useSelector(({ texts }) => texts.texts);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    dispatch(onAddTexts(text));
  };

  return (
    <>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={onAddText} />
      <TextList texts={texts} />
    </>
  );
}

export default App;
