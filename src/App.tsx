import About from "./components/About";
import CapabilityTabs from "./components/CapabilityTabs";
import Contact from "./components/Contact";
import CtaBanner from "./components/CtaBanner";
import EngagementModels from "./components/EngagementModels";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OperatingWorkflow from "./components/OperatingWorkflow";
import RegionalOperations from "./components/RegionalOperations";
import ServicePillars from "./components/ServicePillars";
import { a11y } from "./data/content";
import { pick, useLanguage } from "./i18n/LanguageContext";

function App() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-zinc-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
      >
        {pick(lang, a11y.skipToContent)}
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ServicePillars />
        <About />
        <CapabilityTabs />
        <RegionalOperations />
        <OperatingWorkflow />
        <EngagementModels />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
