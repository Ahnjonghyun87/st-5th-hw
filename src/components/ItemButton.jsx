import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/slices/cartSlice";

const ItemButton = () => {
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addCartItem({
        title: titleRef.current.value,
        price: numberRef.current.value,
        id: Date.now(),
      })
    );

    titleRef.current.value = "";
    numberRef.current.value = "";
    // 넘버와 텍스트 인풋의 값을 받아서 클릭하면 저장하는데
    // 우리가 저장할 곳이 머입니까?
    // 리덕스 툴킷으로 저장할거에요 store에 저장한다는 뜻이죠
  };

  return (
    <div>
      <input type="text" placeholder="text" title="품목명" ref={titleRef} />
      <input type="number" placeholder="price" title="가격" ref={numberRef} />
      <button onClick={handleSubmit}>저장</button>
    </div>
  );
};

export default ItemButton;
