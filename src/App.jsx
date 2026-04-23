import { AboutSection } from "./components/AboutSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { FeaturedCaseStudy } from "./components/FeaturedCaseStudy";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { navItems } from "./data/portfolio";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  return (
    <div className="min-h-screen bg-canvas text-text">
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <FeaturedCaseStudy />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
