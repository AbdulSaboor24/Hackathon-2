import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandsBanner from "./components/BrandsBanner";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import BrowseByStyle from "./components/BrowseByStyle";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <Hero />
      <BrandsBanner />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <TestimonialsSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
