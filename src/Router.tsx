import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import BlogsPage from "./pages/blogs/BlogsPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NamesRute } from "./models/namesRute.model";

const Router = () => {
  return (
    <Routes>
      <Route path={NamesRute.HOMEPAGE} element={<HomePage />} />
      <Route path={NamesRute.ABOUT} element={<AboutPage />} />
      <Route path={NamesRute.CONTACT} element={<ContactPage />} />
      <Route path={NamesRute.BLOG} element={<BlogsPage />} />
      <Route path={NamesRute.PROJECTS} element={<ProjectsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
