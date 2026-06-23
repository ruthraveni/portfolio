import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Programming Languages', items: ['Java', 'C++', 'C', 'JavaScript', 'SQL'] },
  { category: 'Frontend', items: ['HTML', 'CSS', 'React.js'] },
  { category: 'Backend', items: ['Spring Boot', 'Node.js', 'Express.js'] },
  { category: 'Databases', items: ['MySQL', 'MongoDB'] },
  { category: 'Core Subjects', items: ['DSA', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP'] },
  { category: 'Tools', items: ['GitHub', 'VS Code', 'Eclipse'] },
  { category: 'Cloud', items: ['AWS Certified Cloud Practitioner'] }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-gradient"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary-color)] border-b border-[rgba(255,255,255,0.1)] pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {group.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-full text-sm text-[var(--text-main)] border border-[rgba(255,255,255,0.1)] hover:border-[var(--primary-color)] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
