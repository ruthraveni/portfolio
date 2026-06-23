import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Glow Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--primary-color)] opacity-20 blur-[120px] -z-10 animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[var(--secondary-color)] opacity-10 blur-[150px] -z-10 animate-pulse pointer-events-none" style={{ animationDelay: '-5s' }}></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="text-center py-8 text-[var(--text-sub)] text-sm border-t border-[rgba(255,255,255,0.05)] mt-12">
        <p>Designed & Built by Ruthraveni M</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
