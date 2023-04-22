import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Portfolio />
      <Testimonials />
      <Contact />
    </Layout>
  );
}
