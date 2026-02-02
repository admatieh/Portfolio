import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { preloadImages } from "./lib/preloadAssets";

// Your components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import EducationCerts from "./components/EducationCerts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Assets to preload
import heroImg from "./assets/final.png";
import finalImg from "./assets/final.png"; 
import codingIcon from "./assets/coding-language.png";
import cyberIcon from "./assets/cyber-security.png";
import mysqlIcon from "./assets/mysql.png";
import pythonIcon from "./assets/python.png";
import passwordIcon from "./assets/password-cracking.png";

export default function App() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const assets = [
      heroImg,
      finalImg,
      codingIcon,
      cyberIcon,
      mysqlIcon,
      pythonIcon,
      passwordIcon,
    ];

    preloadImages(assets, setProgress).then(() => {
      setTimeout(() => setReady(true), 150);
    });
  }, []);

  if (!ready) return <Loader progress={progress} />;

  return (
    <div id="top" className="min-h-screen bg-[#070707]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <EducationCerts />
      <Contact />
      <Footer />
    </div>
  );
}
