import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Countdown from "@/components/home/Countdown";
import AboutStats from "@/components/home/AboutStats";
import Zones from "@/components/home/Zones";
import Highlights from "@/components/home/Highlights";
import Lineup from "@/components/home/Lineup";
import Community from "@/components/home/Community";
import TenantDirectory from "@/components/home/TenantDirectory";
import Rundown from "@/components/home/Rundown";
import VenueMap from "@/components/home/VenueMap";
import Partnership from "@/components/home/Partnership";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <Countdown />
        <AboutStats />
        <Zones />
        <Highlights />
        <Lineup />
        <Community />
        <TenantDirectory />
        <Rundown />
        <VenueMap />
        <Partnership />
      </main>
      <Footer />
    </>
  );
}
