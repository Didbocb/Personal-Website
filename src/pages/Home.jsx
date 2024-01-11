import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AnimatedPage from '../components/AnimatedPage.jsx';
import '../css/Home.css';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Home({ data }) {
    const { documentTitle, setDocumentTitle } = useDocumentTitle('Home');
    // Get the list of words used for the typewriter component
    const typewriterOptions = data.content.typewriter_options;

    return (
    <AnimatedPage className={"intro"}>
            {/* Profile + Typewriter */}
            <div className="profile w-100">
                <div>
                    <h1>Lado Natsvlishvili</h1>

                    <span className="typewriter">
                        {'> '}
                        <Typewriter 
                          className="typewriter" 
                          words={typewriterOptions} 
                          cursor={true}
                          cursorBlinking={true}
                          loop={true}
                          typeSpeed={60}
                          deleteSpeed={45}
                        />
                    </span>
                </div>
                <img src="/images/pfp.jpg" alt="headshot" className="headshot" />
            </div>
            
            {/* About Me Section */}
            <div className="text-section w-100">
                <h2 className="section-header">Introduction</h2>

                <p>
                    Greetings! My name is Lado and I'm a passionate second-year student navigating the realm of Computer Science at the University of Guelph. Balancing my academic pursuits with real-world experience, I'm on a Co-op journey, delving into the intricacies of Computer Science. Outside the coding sphere, I find solace in the harmonies of music and the thrill of racing games. In the pockets of free time, I embark on ventures of creativity, crafting personal projects to elevate my prowess in programming and design. <br /><br />
                    If you resonate with my journey or simply want to connect, feel free to reach out through any of the platforms below.
                </p>

                <div className="contacts">
                    <a href="https://github.com/Didbocb" target="_blank">
                        <img src="/images/github.svg" alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/lado-natsvlishvili/" target="_blank">
                        <img src="/images/linkedin.svg" alt="LinkedIn" />
                    </a>
                    <a href="mailto:ladonatsvlishvili@gmail.com" target="_blank">
                        <img src="/images/gmail.svg" alt="Gmail" />
                    </a>
                    <a href="https://www.instagram.com/lado_natsvlishvili/" target="_blank">
                        <img src="/images/instagram.svg" alt="Instagram" />
                    </a>
                </div>
            </div>
        </AnimatedPage>
        );
}