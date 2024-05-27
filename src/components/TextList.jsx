import { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

export default function TextList() {
  const texts = useContext(FamilyContext);
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
