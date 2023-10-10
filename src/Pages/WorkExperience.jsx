import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { works } from '../Utils/works';
import { FaUpLong, FaDownLong } from 'react-icons/fa6';

const WorkExperience = () => {

    const [videoVisible, setVideoVisible] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleScroll = (direction) => {
        if (direction === "up" && selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        } else if (direction === "down" && selectedIndex < works.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setVideoVisible(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const workComponents = works.map(work =>
        <div className='mt-3' key={work.id}>
            
            <h5 className='mb-2'>{work.title}</h5>
            <h6 className="mb-4 date">{work.date}</h6>
            <h6 className="mb-4">{work.company}, {work.place}</h6>
            <p>
                {work.description}
            </p>
        </div>
    );

    return (
        <section>
            {videoVisible && (
                <video
                    src={require("../Images/systemglitch.mov")}
                    autoPlay
                    muted
                    loop
                />
            )}

            <div className='content'>

                <Row className={videoVisible ? 'd-flex p-1 mx-3 extreme-glitch' : 'd-flex p-1 mx-3'}>
                    <Col xs={10}>
                        {workComponents[selectedIndex]}
                    </Col>

                    <Col xs={2}>
                        <div className='p-3'>
                            <div>
                                <Button className='pushable mx-1' onClick={() => handleScroll("up")}> <span className='front-works'><FaUpLong /></span></Button>
                                <Button className='pushable mx-1' onClick={() => handleScroll("down")}> <span className='front-works'><FaDownLong /></span></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default WorkExperience;
