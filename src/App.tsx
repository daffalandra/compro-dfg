import About from "./components/About";
import CapabilityTabs from "./components/CapabilityTabs";
import CtaBanner from "./components/CtaBanner";
import EngagementModels from "./components/EngagementModels";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OperatingWorkflow from "./components/OperatingWorkflow";
import RegionalOperations from "./components/RegionalOperations";
import ServicePillars from "./components/ServicePillars";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ServicePillars />
        <About />
        <CapabilityTabs />
        <RegionalOperations />
        <OperatingWorkflow />
        <EngagementModels />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
