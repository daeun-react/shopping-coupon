import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SET_COUPON } from "contexts/cart";
import { useCartDispatch, useCartState } from "contexts/cart/CartContext";
import { COUPON_BASE_URL } from "utils/constants";

function CouponSelect() {
  const { coupon } = useCartState();
  const dispatch = useCartDispatch();

  const [couponList, setCouponList] = useState([]);
  const handleSelect = (e) => {
    dispatch({
      type: SET_COUPON,
      payload: couponList.find((coupon) => coupon.title === e.target.value),
    });
  };

  useEffect(() => {
    fetch(COUPON_BASE_URL)
      .then((res) => res.json())
      .then((res) => setCouponList(res.coupons));
  }, []);

  return (
    <Wrapper>
      <Select value={coupon.title} onChange={handleSelect}>
        <Option hidden>쿠폰을 선택해주세요.</Option>
        {couponList.map(({ type, title }, idx) => (
          <Option key={idx} value={title}>
            {title}
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
}

export default CouponSelect;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Select = styled.select`
  width: 30%;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  cursor: pointer;
`;

const Option = styled.option`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 0.5rem;
  line-height: 1rem;
`;
