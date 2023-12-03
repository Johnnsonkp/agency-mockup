import "./styles.css";

import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServicesSection />
      <FooterSection />
    </div>
  );
}

export default App;
