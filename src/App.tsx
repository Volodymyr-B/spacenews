import { Route, Routes } from "react-router-dom";
import { ArticlePage } from "./pages/article-page/ArticlePage";
import { ErrorPage } from "./pages/error-page/ErrorPage";
import { HomePage } from "./pages/home-page/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
