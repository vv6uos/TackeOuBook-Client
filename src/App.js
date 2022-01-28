//-----import 외부 소스
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

//-----import 내부
import {
  MainPage,
  LoginPage,
  DetailPage,
  RegisterPage,
  UploadPage,
  TestPage,
  Header,
} from "Pages/index";
import { myCSS, myTheme, GlobalStyle } from "style/index";

const { colors } = myTheme;

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
