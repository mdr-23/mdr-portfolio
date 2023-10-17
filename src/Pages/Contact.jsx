import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    
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
                <Form className={videoVisible ? 'mt-2 extreme-glitch p-3' : 'mt-2 p-3'} action="https://formsubmit.co/delrosariomartin23@gmail.com" method="POST">
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
{/*                             <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>                       
                        </Col>

                        <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" required as="textarea" aria-label="With textarea" placeholder="Message" />
                    </Form.Group>
                    </Row>

{/*                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <input type="hidden" name="_next" value="https://mdr-portfolio.onrender.com" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                </Form>
            </div>
        </section>
    )

}

export default Contact