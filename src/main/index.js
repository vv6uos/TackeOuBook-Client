import { React, useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
function MainPage() {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/bestsellers")
      .then((result) => {
        const bestsellers = result.data.bestsellers;
        console.log("데이터 전송 성공 : ", bestsellers);
        setBestsellers(bestsellers);
      })
      .catch((err) => {
        console.log("실패 :", err);
      });
  }, []);

  return (
    <div>
      <div id="bestsellerBook_board">
        <h1>추천도서 (출처 : 알라딘 베스트셀러 추천도서 API) </h1>
        <div id="bestseller_card_list">
          {bestsellers.map((bestseller, index) => {
            return (
              <div className="bestseller_card">
                <img alt="베스트셀러 사진" />
                <div>{bestseller.id}</div>
                <div>{bestseller.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="sale_book_board">
        <h1>판매도서</h1>
        <div id="saleBook_card_list">
          <div className="saleBook_card">
            <p>도서명 : ㅇㅇㅇ</p>
            <p>도서가격 : 000원</p>
            <p>판매자 : 000</p>
            <p>몇분전 업데이트</p>
          </div>
          <div className="saleBook_card">
            <p>도서명 : ㅇㅇㅇ</p>
            <p>도서가격 : 000원</p>
            <p>판매자 : 000</p>
            <p>몇분전 업데이트</p>
          </div>
        </div>
        판매도서 카드 만들기 판매완료된 도서는 회색으로 솔드아웃표시{" "}
      </div>
    </div>
  );
}

export default MainPage;
