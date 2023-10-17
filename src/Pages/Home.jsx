import { useEffect } from 'react';
import { useState } from 'react';
import { FaReact, FaCss3, FaSass, FaBootstrap, FaGitAlt, FaJs, FaHtml5 } from 'react-icons/fa';
import { SiMui } from 'react-icons/si';

const Home = () => {
    
    const [videoVisible, setVideoVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVideoVisible(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return(
        <section className='home'>
            {videoVisible && (
                <video
                    src={require("../Images/systemglitch.mov")}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            )}
            <div className='content'>
                <div className={videoVisible ? 'mt-2 extreme-glitch p-3' : 'mt-2 p-3'}>
                <p>
                    I was born in 1992 in Buenos Aires, Argentina. Now based in Munich. I am very interested in
                    technology and its potential to change and improve people's reality. I'm always looking
                    for ways to improve and grow my skills and how I can use them to build amazing things.
                    Whether it's creating a visually appealing website or a complex application, I'm always up for the challenge.
                    I'm excited about the future of technology and I can't wait to see what I'll be able to create in the years to come!
                </p>

                <h3 className='mb-2'>
                    Stack
                </h3>

                <p className='stack-icons'>
                    <FaReact className='mx-2 icon react-icon' />
                    <FaHtml5 className='mx-2 icon html-icon'/>
                    <FaCss3 className='mx-2 icon css-icon'/>
                    <FaJs className='mx-2 icon js-icon'/>
                    <FaSass className='mx-2 icon sass-icon'/>
                    <FaBootstrap className='mx-2 icon bootstrap-icon'/>
                    <SiMui className='mx-2 icon mui-icon'/>
                    <FaGitAlt className='mx-2 icon git-icon'/>
                </p>
                </div>
            </div>
        </section>
    )

}

export default Home