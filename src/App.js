import "./App.css";
import MainPage from "./main";
import UploadPage from "./upload";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./login";
import Header from "./header";
import DetailPage from "./detail";

function App() {
  return (
    
    <div>
      <Header />

      <div id="body">
        <Routes>
          <Route path={"/upload"} element={<UploadPage />} />
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/book"} element={<DetailPage />} />
        </Routes>
      </div>
      <div id="foot">@s6uos ALL RIGHTS RESERVED</div>
    </div>
  );
}

export default App;
