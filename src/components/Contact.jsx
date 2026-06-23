import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-gradient"
        >
          Contact Me
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 flex flex-col items-center gap-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="text-3xl text-[var(--primary-color)]" />
              <a href="mailto:m.ruthraveni@gmail.com" className="text-[var(--text-sub)] hover:text-[var(--primary-color)] transition-colors">
                m.ruthraveni@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <FaPhoneAlt className="text-3xl text-[var(--primary-color)]" />
              <span className="text-[var(--text-sub)]">
                +91 8695258010
              </span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <FaMapMarkerAlt className="text-3xl text-[var(--primary-color)]" />
              <span className="text-[var(--text-sub)]">
                Theni, Tamil Nadu, India
              </span>
            </div>
          </div>

          <div className="flex gap-6 mt-6 pt-6 border-t border-[rgba(255,255,255,0.1)] w-full justify-center">
            <a href="https://github.com/ruthraveni" target="_blank" rel="noreferrer" className="text-2xl text-[var(--text-sub)] hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ruthraveni-m-b5a35729a/" target="_blank" rel="noreferrer" className="text-2xl text-[var(--text-sub)] hover:text-[#0a66c2] transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/ruthraveni/" target="_blank" rel="noreferrer" className="text-2xl text-[var(--text-sub)] hover:text-[#FFA116] transition-colors">
              <SiLeetcode />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
