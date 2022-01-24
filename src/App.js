import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import MainPage from "Pages/MainPage/Index";
import UploadPage from "Pages/UploadPage";
import LoginPage from "Pages/LoginPage";
import Header from "components/Header";
import TestPage from "Pages/TestPage/TestPage";
import DetailPage from "Pages/DetailPage";
import GlobalStyle from "style/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Body>
          <Routes>
            <Route path={"/upload"} element={<UploadPage />} />
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/books/:id"} element={<DetailPage />} />
            <Route path={"/test"} element={<TestPage />} />
          </Routes>
        </Body>
        <Footer>@s6uos ALL RIGHTS RESERVED</Footer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 1024px;
  min-width: 300px;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  width: 100%;
  height: 15vh;
  color: white;
  background-color: gray;
  margin-top: 3vh;
`;
const Body = styled.body`
  margin: 0;
  font-family: "GmarketSansMedium", "Arial", sans-serif;
  line-height: 1.2;
  min-height: 70vh;
`;

export default App;
