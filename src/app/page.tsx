import { Container } from "postcss";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-14">
        <HeroSection />
      </div>
    </main>
  );
}
