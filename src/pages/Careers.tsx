
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CareersContent } from "@/components/careers/CareersContent";
import { InstituteHero } from "@/components/careers/InstituteHero";

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <InstituteHero 
        title="Join Our Team" 
        subtitle="Build your career while making a difference in education" 
        gradientClass="bg-gradient-to-r from-purple-800 to-purple-600"
      />
      <CareersContent />
      <Footer />
    </div>
  );
}
