import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';

function AnimatedRoutes({ data, setDocumentTitle }) {
    const location = useLocation();

    const pageVariants = {
        initial: { opacity: 0, y: 50, scale: 0.95 },
        in: { opacity: 1, y: 0, scale: 1 },
        out: { opacity: 0, y: -50, scale: 0.95 },
    };

    const pageTransition = {
        type: "spring",
        stiffness: 300,
        damping: 30,
    };

    return (
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <Routes location={location} key={location.pathname}>
                <Route 
                    exact path="/" 
                    element={
                        <motion.div 
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                            style={{ backgroundColor: 'rgba(255,0,0,0.1)', border: '1px solid red', width: '100%' }} // Temporary styles
                        >
                            <Home data={data} setDocumentTitle={setDocumentTitle} />
                        </motion.div>
                    } 
                />
                <Route 
                    exact path="/projects" 
                    element={
                        <motion.div 
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                            style={{ backgroundColor: 'rgba(0,255,0,0.1)', border: '1px solid green', width: '100%' }} // Temporary styles
                        >
                            <Projects 
                                data={data} 
                                setDocumentTitle={setDocumentTitle} 
                            />
                        </motion.div>
                    } 
                />
                <Route 
                    exact path="/about" 
                    element={
                        <motion.div 
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                            style={{ backgroundColor: 'rgba(0,0,255,0.1)', border: '1px solid blue', width: '100%' }} // Temporary styles
                        >
                            <About data={data} setDocumentTitle={setDocumentTitle} />
                        </motion.div>
                    } 
                />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
