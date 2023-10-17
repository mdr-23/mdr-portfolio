import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import SpinnerLoader from '../Components/SpinnerLoader';

const Contact = () => {
    
    const [videoVisible, setVideoVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
      
        const formData = new FormData(e.target);
      
        try {
          const response = await fetch('https://formsubmit.co/delrosariomartin23@gmail.com', {
            method: 'POST',
            headers: {
              'Accept': 'application/json'
            },
            body: formData
          });
      
          if (response.ok) {
            navigate('/contact/email-submitted');
            setIsLoading(false);
          } else {
            console.error('Error al enviar el formulario');
            setIsLoading(false);
          }
        } catch (error) {
          console.error('Error al enviar el formulario', error);
        }
      };
      

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
            <Form className={videoVisible ? 'mt-2 extreme-glitch p-3' : 'mt-2 p-3'} onSubmit={handleSubmit}>
                <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter your name" />
                    </Form.Group>
                    </Col>

                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter your email" />
                    </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control name='message' type="text" required as="textarea" aria-label="With textarea" placeholder="Message" />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit <SpinnerLoader loading={isLoading} />
                </Button>

                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
            </Form>

            </div>
        </section>
    )

}

export default Contact