import "./index.css";
import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/constants.js";


function DetailPage() {
  const { id } = useParams([]);
  const [book, setBook] = useState();
  console.log("비동기처리test", book);
  useEffect(() => {
    axios
      .get(`${API_URL}/books/${id}`)
      .then((result) => {
        console.log(result);
        const book = result.data;
        setBook(book);
      })
      .catch((err) => {
        console.log("실패", err);
      });
  }, [id]);
  if (book === undefined) {
    return <span>상품정보를 받아오고 있는중입니다.</span>;
  }

  return (
    <main>
      <header>
        <div id="info-name">
          {book.id}
          {`        `}
          {book.name}
        </div>
      </header>
      <body>
        {/*왼쪽 도서 이미지 구역시작*/}
        <div id="left">
          <div id="image-frame">
            <img src={`${book.imgURL}`} alt="책이미지" id="image" />
          </div>
        </div>
        {/*오른쪽 도서 상세정보 구역 시작*/}
        <div id="right">
          <div id="info-box">
            <div className="info">
              <div>판매자</div>
              <span id="seller">{book.seller}</span>
            </div>
            <div className="info">
              <div>판매가</div>
              <span id="price">{book.price}</span>
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
