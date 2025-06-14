
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { BookingForm } from "@/components/BookingForm";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <BookingForm />
      <Contact />
    </div>
  );
};

export default Index;
