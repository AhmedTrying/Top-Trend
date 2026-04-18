import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhyUs from "@/components/home/WhyUs";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import PackagesPreview from "@/components/home/PackagesPreview";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Process />
        <PackagesPreview />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
