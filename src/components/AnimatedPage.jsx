import { motion } from 'framer-motion';

// Animation properties to apply to the AnimatedPage component
const animation = {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -100, scale: 0.8 },
}

/**
 * Returns a <div></div> element that contains animation properties from the framer motion library
 * 
 * @param {JSX.Element} children The children to be wrapped into the component
 * @param {String} className The class name(s) to be applied to the component 
 * 
 * @returns {JSX.Element} A <div></div> element with the specified animation properties
 */
function AnimatedPage({ children, className }) {
    return (
        <motion.div 
          className={className}
          variants={animation} 
          initial="initial" 
          animate="animate" 
          exit="exit"
          transition={{
            duration: 0.6,
            ease: 'backInOut', // Using a built-in easing function
          }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage;