import { Route, Routes } from "react-router-dom";
import { ArticlePage } from "./pages/article-page/ArticlePage";
import { HomePage } from "./pages/home-page/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
