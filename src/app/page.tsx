import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Audience from "@/components/Audience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Capabilities />
        <Process />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
