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
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/upload"} element={<UploadPage />} />
            <Route path={"/books/:id"} element={<DetailPage />} />
            <Route path={"/test"} element={<TestPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/register"} element={<RegisterPage />} />
          </Routes>
        </Body>
        <Footer>@s6uos ALL RIGHTS RESERVED</Footer>
      </Wrapper>
    </>
  );
}
export default App;

//-----스타일
const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 300px;

  ${myCSS.center}
  ${myCSS.flexColumn}
`;

const Footer = styled.footer`
  height: 8rem;
  color: white;
  background-color: ${colors.d1};
`;
const Body = styled.div`
  min-height: 90vh;
`;
