import axios from "axios";
import "./index.css";
function MainPage() {
  axios
    .get("http://localhost:8080/bestsellers")
    .then((result) => {
      const bestsellers = result.data;
      console.log("데이터 전송 성공 : ", bestsellers);
    })
    .catch((err) => {
      console.log("실패 :", err);
    });
  return (
    <div>
      <div id="bestsellerBook_section">
        <p>추천도서 (출처 : 알라딘 베스트셀러 추천도서 API) </p>
        <div id="bestsellers_card_list">
          <div className="bestsellers_card">
            <img alt="추천도서사진1" />
            <p>도서순위: 1</p>
            <p>도서명 : ㅇㅇㅇ</p>
          </div>
          <div className="bestsellers_card">
            <img alt="추천도서사진2" />
            <p>도서순위: 2</p>
            <p>도서명 : ㅁㅁㅁ</p>
          </div>
        </div>
      </div>
      <div id="sale_book_board">
        <p>판매도서</p>
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