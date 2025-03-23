import React from 'react';
import { motion } from 'framer-motion';

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for getting started with your mental wellness journey",
      features: [
        "Access to basic meditation guides",
        "Community support groups",
        "Basic progress tracking",
        "Limited self-help resources",
        "3 free therapy sessions",
        "Basic journaling tools"
      ],
      buttonText: "Get Started",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: false
    },
    {
      name: "Premium",
      price: "29",
      description: "Unlock all features for comprehensive mental wellness support",
      features: [
        "Unlimited therapy sessions",
        "Priority therapist matching",
        "Advanced progress analytics",
        "AI-powered meal planning",
        "Premium meditation library",
        "Personalized wellness plans",
        "24/7 crisis support",
        "Family therapy sessions",
        "Offline access to resources",
        "Exclusive community events"
      ],
      buttonText: "Upgrade to Premium",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      popular: true
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
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that best fits your mental wellness needs
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, background: 'linear-gradient(135deg, #a0c4ff 0%, #d0eaff 100%)' }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="ml-1 text-gray-500">/month</span>
                </div>
                <p className="mt-4 text-gray-600">{plan.description}</p>
              </div>

              <div className="flex-grow overflow-y-auto mt-8">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-center text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.button
                className={`mt-8 w-full py-3 px-6 rounded-lg font-semibold text-white ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-800 hover:bg-gray-900'
                } transition-colors duration-200`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="mt-2 text-gray-600">
            Need help choosing? <a href="/contact" className="text-blue-600 hover:text-blue-700">Contact our support team</a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Pricing;