import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { AboutPage } from "../pages/about";
import { HomePage } from "../pages/home";

export const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="post/:id" element={} /> */}
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
