import { motion } from 'framer-motion'
import { IconBrain, IconData, IconAutomation, IconConsulting } from './IconDiagrams'

const services = [
  {
    Icon: IconBrain,
    title: 'RAG Chatbots',
    description: 'Custom chatbot development with specialized data integration',
  },
  {
    Icon: IconAutomation,
    title: 'AI Agents',
    description: 'Intelligent automation for complex business workflows',
  },
  {
    Icon: IconData,
    title: 'Data Processing',
    description: 'Advanced document processing and structuring',
  },
  {
    Icon: IconConsulting,
    title: 'AI Consulting',
    description: 'Strategic guidance and implementation support',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }
  },
}

export default function Services() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="creative-shape top-0 left-1/2 -translate-x-1/2"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-display-xl mb-6">
            Our <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Comprehensive AI solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-effect rounded-[2rem] p-8 hover-lift"
            >
              <div className="mb-6 aspect-square w-24 h-24 mx-auto">
                <service.Icon />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gradient text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
