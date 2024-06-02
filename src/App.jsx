import {
  AboutSection,
  ContactSection,
  Footer,
  HeroSection,
  Sidebar,
  Skills,
  WorksSection,
} from "./components";
import BlogsSection from "./components/BLogsSection";
import Navbar from "./components/Navbar";
 import React from "react";
 import { ToastContainer } from "react-toastify";



function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <Sidebar />
      <WorksSection />
      <BlogsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
