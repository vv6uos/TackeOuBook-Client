import { React, useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";

function MainPage() {
  const [bestsellers, setBestsellers] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/bestsellers")
      .then((result) => {
        const bestsellers = result.data.bestsellers;
        console.log("베스트셀러 데이터 전송 성공 : ", bestsellers);
        setBestsellers(bestsellers);
      })
      .catch((err) => {
        console.log("실패 :", err);
      });
    axios.get("http://localhost:8080/books").then((result) => {
      const books = result.data.books;
      setBooks(books);
      console.log("판매도서 데이터 전송 성공 : ", books);
    }).catch((err) => {
        console.log("실패 :", err);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="/images/banner-002.png" alt="배너" />
      </div>
      <div id="bestsellerBook_board">
        <h2>추천도서 (출처 : 알라딘 베스트셀러 추천도서 API) </h2>
        <div id="bestseller_card_list">
          {bestsellers.map((bestseller) => {
            return (
              <div className="bestseller_card">
                <img src={`${bestseller.imgURL}`} alt="베스트셀러 사진" />
                <div className="bestseller_info">
                  <div>{bestseller.id}</div>
                  <div>{bestseller.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="sale_book_board">
        <h1>판매도서</h1>
        <div id="saleBook_card_list">
          {books.map((book) => {
            return (
              <Link to={`/books/${book.id}`}>
                <div className="saleBook_card">
                  <img src={`${book.imgURL}`} alt="판매도서사진" />
                  <div className="saleBook_info">
                    <p>{book.id}</p>
                    <p>도 서 명:{book.name}</p>
                    <p>판매가격:{book.price}원</p>
                    <p>판 매 자:{book.seller}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        판매도서 카드 만들기 판매완료된 도서는 회색으로 솔드아웃표시{" "}
      </div>
    </div>
  );
}

export default MainPage;
