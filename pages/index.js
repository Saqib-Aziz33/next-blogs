import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXT Blogs</title>
      </Head>
      <div className="page-center">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
