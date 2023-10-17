import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EmailSubmitted = () => {
    
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
        <section className='d-flex justify-content-center align-items-center'>
            {videoVisible && (
                <video
                    src={require("../Images/systemglitch.mov")}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            )}
            
            <div className='content email-submitted'>
                <h3>Thank you for your message</h3>
                <p>I will get in touch as soon as possible</p>
            </div>
        </section>
    )

}

export default EmailSubmitted