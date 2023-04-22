import Navbar from "./Navbar";
import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Thanuseng Kevin Prachith</title>
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
