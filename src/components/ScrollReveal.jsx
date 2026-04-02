import { motion } from 'framer-motion';

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.7,
  className = "" 
}) {
  // Define where the element starts based on the direction
  const getHiddenState = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 50 };
      case 'down': return { opacity: 0, y: -50 };
      case 'left': return { opacity: 0, x: 50 };
      case 'right': return { opacity: 0, x: -50 };
      case 'none': return { opacity: 0 }; // Just fade in
      default: return { opacity: 0, y: 50 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getHiddenState()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-10%" }} // Triggers when 10% of the element is in view. 'once: true' stops it from re-animating if they scroll up and down
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0, 1], // Super smooth custom easing
      }}
    >
      {children}
    </motion.div>
  );
}