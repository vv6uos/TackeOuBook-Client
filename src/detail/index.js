import "./index.css";

function DetailPage() {
  return (
    <main>
      <br />
      <header>
        <div id="info-name">작별하지 않는다 font확인용</div>
      </header>
      <br />
      <body>
        {/*왼쪽 도서 이미지 구역시작*/}
        <div id="left">
          <div id="image-frame">
            <img src="/images/books/book3.jpg" alt="책이미지" id="image" />
          </div>
        </div>
        {/*오른쪽 도서 상세정보 구역 시작*/}
        <div id="right">
          <div id="info-box">
            <div className="info">
              <div>판매자</div>
              <span id="seller">제인</span>
            </div>
            <div className="info">
              <div>판매가</div>
              <span id="price">5000원</span>
            </div>
            <div className="info">
              <div>상품상태</div>
              <span id="condition">상</span>
            </div>
            {/**구매하기 버튼 */}
          </div>
          <div>
            <button>구매하기</button>
          </div>
        </div>
      </body>
    </main>
  );
}

export default DetailPage;
