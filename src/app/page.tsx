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
import CallToAction from "@/components/home/CallToAction";
import VenueMap from "@/components/home/VenueMap";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Global Dynamic Background for all sections */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
        {/* Subtle CSS Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/15 blur-[150px]"></div>
        <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-tertiary/10 blur-[120px]"></div>
      </div>

      <main className="flex-grow pt-20 relative">
        <Hero />
        <Countdown />
        <AboutStats />
        <Zones />
        <Highlights />
        <Lineup />
        <Community />
        <TenantDirectory />
        <Rundown />
        <CallToAction />
        <VenueMap />
      </main>
      <Footer />
    </>
  );
}
