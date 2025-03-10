import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does online therapy work?",
      answer: "Online therapy works through secure video calls, chat, or phone sessions. You'll connect with your therapist through our platform at your scheduled time. The process is simple - just log in, join your session, and start your therapy journey from the comfort of your home."
    },
    {
      question: "Is my information private and secure?",
      answer: "Yes, we take your privacy seriously. All sessions are encrypted, and your information is stored securely. We comply with HIPAA guidelines and use industry-standard security measures to protect your data."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and some insurance plans. Payment is processed securely through our platform before each session."
    },
    {
      question: "Can I switch therapists?",
      answer: "Yes, you can switch therapists at any time. We understand that finding the right therapist is crucial for your healing journey. Simply contact our support team, and we'll help you find a better match."
    },
    {
      question: "What if I need emergency help?",
      answer: "If you're experiencing a mental health emergency, please call emergency services immediately. While we provide support, we're not a crisis service. For immediate help, contact your local emergency number or crisis hotline."
    },
    {
      question: "Do you offer group therapy sessions?",
      answer: "Yes, we offer various group therapy sessions led by experienced therapists. These sessions can be more affordable and provide additional support through shared experiences."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              variants={itemVariants}
            >
              <motion.button
                className="w-full text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
                onClick={() => toggle(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-lg font-medium transition-colors duration-200 ${openIndex === index ? 'text-blue-600' : 'text-gray-900'} group-hover:text-blue-600`}>
                    {faq.question}
                  </span>
                  <motion.span
                    className={`text-gray-400 transition-colors duration-200 ${openIndex === index ? 'text-blue-600' : ''}`}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FAQ;
