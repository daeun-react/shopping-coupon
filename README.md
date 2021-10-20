# 쇼핑몰 상품 목록 및 장바구니 사이트 만들기

## [🔗 배포 링크](https://shopping-coupon.netlify.app/)

## 시연 영상

![시연 영상](https://user-images.githubusercontent.com/67173064/138022930-02a034e6-078f-42d3-96a4-a9dd632c3303.gif)

## 요구 사항 및 구현 기능

- [x] **상품 목록 페이지**(route: /products)

  - [x] 가격과 사진, 상품 제목 표시
  - [x] score를 기준으로 내림차순으로 정렬하여 5개씩 제시 (**`Carousel 기능`** 구현)
  - [x] 각 상품에 장바구니 버튼으로 담기/빼기 기능 구현

- [x] **장바구니 페이지** (route: /cart)
  - [x] 장바구니에는 최대 3개까지 담도록 구현할 것
  - [x] 장바구니의 상품 중, 결제에 포함할 상품을 체크박스로 구현할 것
  - [x] 장바구니에 담긴 각 상품의 수량을 선택하도록 구현할 것 (단, 최소 1개의 수량이 지정되도록 할 것)
  - [x] 장바구니에 담긴 전체 상품의 최종 결제 금액에 대하여 **`쿠폰 기능`** 구현
    - [x] 정액 할인(amount) - {discountAmount}원 만큼 할인
    - [x] 비율 할인(rate) - {discountRate}% 만큼 할인

## 설치 및 시작 방법

```js
- git clone https://github.com/daeun-react/shopping-coupon.git
- cd shopping-coupon
- npm install
- npm start
```
