import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Page from "./pages/Page";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Page />} />
      </Routes>
    </Layout>
  );
}

export default App;