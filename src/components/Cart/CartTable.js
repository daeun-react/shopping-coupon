import React from "react";
import styled from "styled-components";
import {
  DELETE_CART,
  MINUS_CART_COUNT,
  PLUS_CART_COUNT,
  TOGGLE_CHECK_ALL,
  TOGGLE_CHECK,
} from "contexts/cart";
import { useCartDispatch, useCartState } from "contexts/cart/CartContext";
import { ReactComponent as MiunsIcon } from "assets/svg/minus.svg";
import { ReactComponent as PlusIcon } from "assets/svg/plus.svg";

function CartTable() {
  const { cart } = useCartState();
  const dispatch = useCartDispatch();

  const isAllCheck = cart.length === cart.filter((item) => item.checked).length;
  const handleCheckBoxAll = (e) => {
    dispatch({
      type: TOGGLE_CHECK_ALL,
      payload: e.target.checked,
    });
  };

  const handleCheckBox = (id) => {
    dispatch({
      type: TOGGLE_CHECK,
      payload: id,
    });
  };
  const handleMinus = (id) => {
    const current = cart.find((item) => item.id === id);
    if (current && Number(current.count) === 1) {
      alert("1 이상 선택되어야 합니다.");
      return;
    }
    dispatch({
      type: MINUS_CART_COUNT,
      payload: id,
    });
  };
  const handlePlus = (id) => {
    dispatch({
      type: PLUS_CART_COUNT,
      payload: id,
    });
  };
  const handleDelete = (id) => {
    dispatch({
      type: DELETE_CART,
      payload: id,
    });
  };

  return (
    <Table>
      <Thead>
        <tr>
          <th>
            <input
              type="checkbox"
              id="totalCheck"
              checked={isAllCheck}
              onChange={handleCheckBoxAll}
            />
            <label htmlFor="totalCheck">전체 선택</label>
          </th>
          <th>클래스</th>
          <th>할인쿠폰</th>
          <th>수량</th>
          <th>판매금액</th>
          <th>삭제</th>
        </tr>
      </Thead>
      <TBody>
        {cart.map(({ id, title, coverImage, price, availableCoupon, count, checked }) => (
          <tr key={id}>
            <CheckBoxTD>
              <input type="checkbox" checked={checked} onChange={() => handleCheckBox(id)} />
            </CheckBoxTD>
            <InfoTD>
              <div>
                <img src={coverImage} alt={title} />
                <p>{title}</p>
              </div>
            </InfoTD>
            <CouponTD>{availableCoupon && <p>할인 가능</p>}</CouponTD>
            <CounterTD>
              <div>
                <button onClick={() => handleMinus(id)}>
                  <MiunsIcon />
                </button>
                <p>{count}</p>
                <button onClick={() => handlePlus(id)}>
                  <PlusIcon />
                </button>
              </div>
            </CounterTD>
            <PriceTD>
              <div>
                <p>{(price * count).toLocaleString()}</p>
              </div>
            </PriceTD>
            <DeleteTD>
              <button onClick={() => handleDelete(id)}>삭제</button>
            </DeleteTD>
          </tr>
        ))}
      </TBody>
    </Table>
  );
}

export default CartTable;

const Table = styled.table`
  width: 80%;
`;

const Thead = styled.thead`
  th {
    background-color: ${({ theme }) => theme.colors.lightGray};
    padding: 1rem;
    font-weight: 600;
    white-space: nowrap;
  }

  th + th {
    border-left: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

const TBody = styled.tbody`
  tr {
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

const TD = styled.td`
  text-align: center;
  vertical-align: middle;
  padding: 1rem;
`;

const CheckBoxTD = styled(TD)``;
const InfoTD = styled(TD)`
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    img {
      width: 8rem;
      object-fit: contain;
      border-radius: 0.3rem;
    }
  }
`;

const CouponTD = styled(TD)`
  p {
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.red};
    font-size: 0.8rem;
    white-space: nowrap;
  }
`;
const CounterTD = styled(TD)`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    button {
      background-color: ${({ theme }) => theme.colors.lightGray};
      border-radius: 50%;
      padding: 0.3rem;
    }

    svg {
      fill: ${({ theme }) => theme.colors.gray};
      width: 0.5rem;
      height: 0.5rem;
    }
  }
`;
const PriceTD = styled(TD)`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    p {
      &::before {
        content: "₩ ";
      }
      &::after {
        content: " 원";
      }
      font-weight: 600;
    }
  }
`;
const DeleteTD = styled(TD)`
  button {
    padding: 0.5rem;
    border-radius: 0.3rem;
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.8rem;
    white-space: nowrap;
  }
`;
