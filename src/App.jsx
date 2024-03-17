import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Beauty from "./components/Beauty";
import Testimonial from "./components/Testimonial";
import Services from "./components/Services";
import Location from "./layouts/Location";
import NotFoundPage from "./layouts/NotFoundPage";
import BeautyConfidental from "./components/BeautyConfidental";
import Faqs from "./components/Faqs";
import DetailedNewsPage from "./layouts/DetailedNewsPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/aboutus"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/beautytv"
            element={
              <Layout>
                <Beauty />
              </Layout>
            }
          />
          <Route
            path="/testimonials"
            element={
              <Layout>
                <Testimonial />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />

          <Route
            path="/findus"
            element={
              <Layout>
                <Location />
              </Layout>
            }
          />
          <Route
            path="/faqs"
            element={
              <Layout>
                <Faqs />
              </Layout>
            }
          />
          <Route
            path="/beautyconfidential"
            element={
              <Layout>
                <BeautyConfidental />
              </Layout>
            }
          />
          <Route
            path="/news/:id"
            element={
              <Layout>
                <DetailedNewsPage />
              </Layout>
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
