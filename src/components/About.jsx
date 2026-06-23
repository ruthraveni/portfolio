import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center text-gradient"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 text-lg text-[var(--text-sub)] leading-relaxed"
        >
          <p>
            Computer Science Engineering student with strong foundations in C++, Data Structures and Problem Solving. Experienced in developing full-stack web applications using React, Spring Boot, MongoDB and MySQL. Passionate about building real-world solutions and seeking Software Engineering opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
