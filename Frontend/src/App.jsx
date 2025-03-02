import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import FeatureSection from "./components/FeatureSection";
import ProductSection from "./components/ProductSection";
import FooterSection from "./components/FooterSection";
import ShopSection from "./components/ShopSection";
import TestimonySection from "./components/TestimonySection";
import BlogSection from "./components/BlogSection";

const App = () => {
  return (
    <div className="bg-white min-h-screen pt-2">
      <Header />
        <main >
          {/* Hero Section */}
          <HeroSection />
          <ShopSection/>
          <TestimonySection/>
        {/* Content Section */}
        <ContentSection />

        {/* Feature Section */}
        <ProductSection />
      <FeatureSection/>

      {/* */}
    <BlogSection/>

        {/* Footer Section */}
        <FooterSection />
      </main>
    </div>
  );
};

export default App;
