import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import BlogLayout from "./pages/blog/BlogLayout";
import BlogIndex from "./pages/blog/BlogIndex";
import BlogPost from "./pages/blog/BlogPost";
import { features } from "./config/features";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          {features.blog && (
            <Route path="/blog" element={<BlogLayout />}>
              <Route index element={<BlogIndex />} />
              <Route path=":slug" element={<BlogPost />} />
            </Route>
          )}
        </Route>
      </Routes>
    </HashRouter>
  );
}
