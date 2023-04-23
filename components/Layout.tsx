import Navbar from "./Navbar";
import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
  titleAddition?: string;
}

export default function Layout({ children, titleAddition }: Props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thanuseng Kevin Prachith{titleAddition}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
