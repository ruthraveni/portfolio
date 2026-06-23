import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-[var(--primary-color)] font-medium mb-2">👋 Hello, I'm</p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
              Ruthraveni M
            </h1>
            <h2 className="text-2xl lg:text-3xl text-[var(--text-sub)] font-semibold mb-6">
            Aspiring Software Engineer| Full Stack Developer | AWS Certified Cloud Practitioner
            </h2>
            <p className="text-lg text-[var(--text-sub)] leading-relaxed max-w-xl mb-8">
              Building scalable web applications and solving real-world problems through technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-full font-semibold transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--primary-color)', 
                  color: 'white',
                  boxShadow: '0 0 20px var(--neon-glow)'
                }}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(37, 99, 235, 0.8)'}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 20px var(--neon-glow)'}
              >
                View Projects
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="px-8 py-3 rounded-full font-semibold transition-all duration-300 border border-[var(--primary-color)]"
                style={{ color: 'var(--text-main)' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.1)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image & Stats */}
        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end gap-8 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full blur-2xl opacity-40 animate-pulse"></div>
            
            <div className="relative glass-card p-2 rounded-[2rem] overflow-hidden" style={{ width: '300px', height: '300px', borderRadius: '50%' }}>
              <img 
                src="/profile.png" 
                alt="Ruthraveni M" 
                className="w-full h-full object-cover"
                style={{ borderRadius: '50%' }}
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full grid grid-cols-2 gap-4 max-w-md lg:ml-auto"
          >
            {[
              "Final Year - CSE Student",
              "AWS - Cloud Practitioner",
              "400+ LeetCode Problems",
              "AI/ML Intern Experience(Remote)"
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 text-center flex items-center justify-center min-h-[80px]">
                <p className="text-sm font-medium text-[var(--text-main)]">{stat}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
