import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Work />
      <Testimonials />
      <Contact />
    </Layout>
  );
}
