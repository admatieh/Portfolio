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
import Experience from "./components/Experience";


// Assets to preload
const allImages = import.meta.glob("./assets/*.{png,jpg,jpeg,gif,svg,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});

const allAssetUrls = Object.values(allImages);

export default function App() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    preloadImages(allAssetUrls, setProgress).then(() => {
      setTimeout(() => setReady(true), 150);
    });
  }, []);

  if (!ready) return <Loader progress={progress} />;

  return (
    <div id="top" className="min-h-screen bg-[#070707]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <EducationCerts />
      <Contact />
      <Footer />
    </div>
  );
}
