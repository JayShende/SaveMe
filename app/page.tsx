import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MobilePreview from "@/components/MobilePreview";
import AppPreview from "@/components/AppPreview";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AppPreview />
      <Features />
      <HowItWorks />
      <MobilePreview />
      <Footer />
    </div>
  );
}

export default App;
