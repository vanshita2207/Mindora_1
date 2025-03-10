import React from 'react';
import { motion } from 'framer-motion';

function Team() {
  const teamMembers = [
    {
      name: "Vanshita",
      role: "Frontend Developer",
      bio: "Passionate about creating beautiful and user-friendly interfaces. Specializes in React and modern web technologies.",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Damanpreet",
      role: "Backend Developer",
      bio: "Expert in backend development and database management. Focuses on creating scalable and efficient solutions.",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The talented individuals behind Mindora
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900"
                  whileHover={{ color: "#2563eb" }}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="mt-2 text-lg text-blue-600"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.role}
                </motion.p>
                <p className="mt-4 text-gray-600">{member.bio}</p>
                
                <div className="mt-6 flex justify-center space-x-4">
                  {Object.entries(member.social).map(([platform, link]) => (
                    <motion.a
                      key={platform}
                      href={link}
                      className="text-gray-400 hover:text-gray-500 transition-colors"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={`fab fa-${platform} text-xl`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-600">
            Together, we're building the future of mental wellness
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Team;
