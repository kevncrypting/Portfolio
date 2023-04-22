import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Portfolio />
      <Contact />
    </Layout>
  );
}
