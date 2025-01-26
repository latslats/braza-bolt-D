import { motion } from 'framer-motion';

const IconBrain = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      stroke="url(#gradientBrain)"
      strokeWidth="1.5"
      fill="none"
      d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 1 7.92 12.446a9 9 0 1 1 -16.626 -8.874a7.5 7.5 0 0 1 8.313 -3.572z"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      stroke="url(#gradientBrain)"
      strokeWidth="1.5"
      fill="none"
      d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
    />
    <defs>
      <linearGradient id="gradientBrain" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

const IconData = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      stroke="url(#gradientData)"
      strokeWidth="1.5"
      fill="none"
      d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      stroke="url(#gradientData)"
      strokeWidth="1.5"
      fill="none"
      d="M9 8h6m-6 4h6m-6 4h6"
    />
    <defs>
      <linearGradient id="gradientData" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

const IconAutomation = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      stroke="url(#gradientAuto)"
      strokeWidth="1.5"
      fill="none"
      d="M12 6v12m-6-6h12"
    />
    <motion.circle
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 1, ease: "backOut" }}
      cx="12"
      cy="12"
      r="8"
      stroke="url(#gradientAuto)"
      strokeWidth="1.5"
      fill="none"
    />
    <defs>
      <linearGradient id="gradientAuto" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

const IconConsulting = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      stroke="url(#gradientConsult)"
      strokeWidth="1.5"
      fill="none"
      d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      stroke="url(#gradientConsult)"
      strokeWidth="1.5"
      fill="none"
      d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
    />
    <defs>
      <linearGradient id="gradientConsult" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

export { IconBrain, IconData, IconAutomation, IconConsulting };
