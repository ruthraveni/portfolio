import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-gradient"
        >
          Journey & Achievements
        </motion.h2>

        <div className="space-y-12">
          
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-[rgba(255,255,255,0.1)]"
          >
            <div className="absolute w-4 h-4 rounded-full bg-[var(--primary-color)] -left-[9px] top-1"></div>
            <h3 className="text-2xl font-bold text-[var(--text-main)]" id="experience-header">Experience(Remote)</h3>
            <div className="mt-4 glass-card p-6">
              <h4 className="text-xl font-semibold text-[var(--primary-color)]">Artificial Intelligence & Machine Learning Intern</h4>
              <p className="text-[var(--text-sub)] mt-2">Gained hands-on experience developing ML models and working with AI tools to solve practical problems.</p>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            id="education"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative pl-8 border-l border-[rgba(255,255,255,0.1)]"
          >
            <div className="absolute w-4 h-4 rounded-full bg-[var(--primary-color)] -left-[9px] top-1"></div>
            <h3 className="text-2xl font-bold text-[var(--text-main)]">Education</h3>
            <div className="mt-4 glass-card p-6">
              <h4 className="text-xl font-semibold text-[var(--primary-color)]">Karpagam College of Engineering</h4>
              <p className="text-lg text-[var(--text-main)]">B.E Computer Science and Engineering</p>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            id="certifications"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative pl-8 border-l border-[rgba(255,255,255,0.1)]"
          >
            <div className="absolute w-4 h-4 rounded-full bg-[var(--primary-color)] -left-[9px] top-1"></div>
            <h3 className="text-2xl font-bold text-[var(--text-main)]">Certifications</h3>
            <div className="mt-4 glass-card p-6 flex flex-col gap-3">
              {[
                "AWS Certified Cloud Practitioner",
                "Introduction to Industry 4.0 and Industrial Internet of Things - NPTEL",
                "C Programming -Infosys Springboard",
                "Education for Sustainable Development - NPTEL",
              ].map((cert, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--secondary-color)]"></div>
                  <span className="text-[var(--text-main)]">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
