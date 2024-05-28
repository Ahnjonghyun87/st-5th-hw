import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "../redux/slices/cartSlice";

const ItemList = () => {
  const cart = useSelector(({ cart }) => cart.cart);
  // 삭제버튼 누르면 목록 삭제=> onClick 이벤트 발동시.
  // 슬라이스 기능으로 deleteSlice 만들기, action넣기
  // 스토어에 deleteSlice 넣기
  //  dispatch를 이곳에 넣기.(itemlist(id))
  const dispatch = useDispatch();

  const onClickDelete = (targetId) => {
    dispatch(deleteCartItem(targetId));
  };

  // onClick(id) 이렇게 하면 함수는 항상 ()안에 있는걸 읽고 바로 실행하기 때문에 익명자 함수로 먼저 {} => 줘버리면 바로 실행하지 않고 우리가 원하는 바대로 클릭할 때만 실행함.

  return (
    <div>
      <ul>
        {cart.map(({ title, price, id }) => {
          return (
            <li key={id}>
              <div>상품 이름 : {title}</div>
              <div>상품 가격 : {price}</div>
              <button onClick={() => onClickDelete(id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
