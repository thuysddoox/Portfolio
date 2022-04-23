import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Header from "../../components/Header";
import { themeGreen } from "../../contants/theme";
import BlogPage from "../Blog";
import AboutPage from "../About";
import ContactPage from "../Contact";
import ProjectPage from "../Projects";
import ExperiencePage from "../Experience";
import HomePage from "../Home";
import Meta from "../../components/Meta";
import Footer from "../../components/Footer";
function App() {
  return (
    <div className="app">
      <Meta />
      <ThemeProvider theme={themeGreen}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
          </Routes>
          <Footer className="block md:hidden" />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
