// import React from 'react';
// import { motion } from 'framer-motion';

// function Services() {
//   const services = [
//     {
//       title: "Personalized Therapy",
//       description: "Connect with licensed therapists specializing in various mental health conditions. First three sessions free; paid consultations for premium users.",
//       icon: "fas fa-user-md",
//       color: "bg-blue-100 text-blue-600"
//     },
//     {
//       title: "Evidence-Based Resources",
//       description: "Access a library of self-help tools, guided meditations, and educational materials. AI-driven meal plans for mental and physical well-being.",
//       icon: "fas fa-book-medical",
//       color: "bg-green-100 text-green-600"
//     },
//     {
//       title: "Community Support",
//       description: "Join online groups for peer-to-peer support, sharing experiences and building connections. Free, multilingual sessions for community support.",
//       icon: "fas fa-users",
//       color: "bg-purple-100 text-purple-600"
//     },
//     {
//       title: "Track Progress",
//       description: "Monitor your mental health journey with journaling prompts and tools to identify patterns. A built-in tracker to monitor daily intake.",
//       icon: "fas fa-chart-line",
//       color: "bg-orange-100 text-orange-600"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <motion.section 
//       className="py-20 bg-white"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           className="text-center"
//           variants={itemVariants}
//         >
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//             Our Services
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Comprehensive mental health and wellness solutions tailored to your needs
//           </p>
//         </motion.div>

//         <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {services.map((service) => (
//             <motion.div
//               key={service.title}
//               className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//             >
//               <motion.div
//                 className={`w-12 h-12 bg-${service.color} rounded-lg flex items-center justify-center mb-6`}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <i className={`${service.icon} text-2xl text-${service.color.split('-')[3]}`}></i>
//               </motion.div>
              
//               <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div 
//           className="mt-16 text-center"
//           variants={itemVariants}
//         >
//           <p className="text-gray-600">
//             All services are provided by licensed professionals and are available online
//           </p>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

// export default Services;

import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      title: "Personalized Therapy",
      description: "Connect with licensed therapists specializing in various mental health conditions. First three sessions free; paid consultations for premium users.",
      icon: "fas fa-user-md",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Evidence-Based Resources",
      description: "Access a library of self-help tools, guided meditations, and educational materials. AI-driven meal plans for mental and physical well-being.",
      icon: "fas fa-book-medical",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Community Support",
      description: "Join online groups for peer-to-peer support, sharing experiences and building connections. Free, multilingual sessions for community support.",
      icon: "fas fa-users",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Track Progress",
      description: "Monitor your mental health journey with journaling prompts and tools to identify patterns. ",
      icon: "fas fa-chart-line",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      className="py-20 bg-white"
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
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive mental health and wellness solutions tailored to your needs
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, background: 'linear-gradient(135deg, #a0c4ff 0%, #d0eaff 100%)' }}
            >
              <motion.div
                className={`w-12 h-12 bg-${service.color} rounded-lg flex items-center justify-center mb-6`}
                whileHover={{ scale: 1.1 }}
              >
                <i className={`${service.icon} text-2xl text-${service.color.split('-')[3]}`}></i>
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-600">
            All services are provided by licensed professionals and are available online
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Services;

