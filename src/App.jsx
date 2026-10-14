import Topbar from './components/layout/Topbar.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import BackToTop from './components/layout/BackToTop.jsx';
import Hero from './components/hero/Hero.jsx';
import About from './sections/About.jsx';
import Services from './sections/Services.jsx';
import Achievements from './sections/Achievements.jsx';
import Voices from './sections/Voices.jsx';
import Notices from './sections/Notices.jsx';
import Team from './sections/Team.jsx';
import Stories from './sections/Stories.jsx';
import Government from './sections/Government.jsx';
import Contact from './sections/Contact.jsx';
import useTheme from './hooks/useTheme.js';
import useFontScale from './hooks/useFontScale.js';

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const fontScale = useFontScale();

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-md bg-ink-accent px-4 py-2 font-semibold text-ink-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Topbar theme={theme} onToggleTheme={toggleTheme} fontScale={fontScale} />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Services />
        <Achievements />
        <Voices />
        <Notices />
        <Team />
        <Stories />
        <Government />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
