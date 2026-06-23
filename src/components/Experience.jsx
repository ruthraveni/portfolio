import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaBriefcase, FaCertificate } from 'react-icons/fa';

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
            <h3 className="text-2xl font-bold text-[var(--text-main)] flex items-center gap-3" id="experience-header">
              <FaBriefcase className="text-[var(--primary-color)]" /> Experience (Remote)
            </h3>
            <div className="mt-4 glass-card p-6 relative overflow-hidden group">
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
            <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6 flex items-center gap-3">
              <FaGraduationCap className="text-[var(--primary-color)]" /> Education
            </h3>
            
            <div className="flex flex-col gap-6">
              {/* College */}
              <div className="glass-card p-6 flex flex-col gap-3 relative overflow-hidden group">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="text-xl font-semibold text-[var(--primary-color)] flex items-center gap-2">
                    Karpagam College of Engineering
                  </h4>
                  <span className="text-sm font-medium text-[var(--text-sub)] px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.05)] shadow-inner">
                    Sep 2023 - May 2027
                  </span>
                </div>
                <p className="text-lg text-[var(--text-main)] font-medium">B.E. Computer Science and Engineering</p>
                <p className="text-sm text-[var(--text-sub)] bg-[rgba(37,99,235,0.1)] w-fit px-3 py-1 rounded-md border border-[rgba(37,99,235,0.2)]">
                  CGPA: <span className="text-[var(--text-main)] font-semibold">8.55</span>
                </p>
              </div>

              {/* School */}
              <div className="glass-card p-6 flex flex-col gap-3 relative overflow-hidden group">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="text-xl font-semibold text-[var(--primary-color)] flex items-center gap-2">
                    <FaSchool className="text-[var(--text-sub)] text-sm" /> S.U.M. Hr. Sec. School
                  </h4>
                  <span className="text-sm font-medium text-[var(--text-sub)] px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.05)] shadow-inner">
                    May 2023
                  </span>
                </div>
                <p className="text-lg text-[var(--text-main)] font-medium">Higher Secondary Certificate (HSC)</p>
                <p className="text-sm text-[var(--text-sub)] bg-[rgba(37,99,235,0.1)] w-fit px-3 py-1 rounded-md border border-[rgba(37,99,235,0.2)]">
                  Percentage: <span className="text-[var(--text-main)] font-semibold">93%</span>
                </p>
              </div>
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
            <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6 flex items-center gap-3">
              <FaCertificate className="text-[var(--primary-color)]" /> Certifications
            </h3>
            <div className="glass-card p-6 flex flex-col gap-4 relative overflow-hidden group">
              {[
                "AWS Certified Cloud Practitioner",
                "Introduction to Industry 4.0 and Industrial Internet of Things - NPTEL",
                "C Programming -Infosys Springboard",
                "Education for Sustainable Development - NPTEL",
              ].map((cert, idx) => (
                <div key={idx} className="flex items-center gap-4 group-hover:translate-x-1 transition-transform duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--secondary-color)] shadow-[0_0_8px_var(--secondary-color)]"></div>
                  <span className="text-[var(--text-main)] text-[0.95rem]">{cert}</span>
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
