import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { projects } from "../Utils/projects";

const Projects = () => {

    const [videoVisible, setVideoVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVideoVisible(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const [projectSelected, setProjectSelected] = useState(null);

    const handleProject = (selectedId) => {
        const project = projects.find(work => work.id === selectedId);
        setProjectSelected(project);
    }

    return (
        <section className='projects'>
            {videoVisible && (
                <video
                    src={require("../Images/systemglitch.mov")}
                    autoPlay
                    muted
                    loop
                />
            )}
            {projectSelected && 
                <>
                    <video src={require("../Images/brokenscreen.mp4")} autoplay="true" muted="true" loop="true" />
                    <div className="overlay" />
                </>
            }

            <div className='content'>

                <div className='projects-cards-container p-3'>
                    <div className={videoVisible ? 'd-flex extreme-glitch justify-content-center' : 'd-flex justify-content-center'}>
                        {projects.map(work =>
                            <Button key={work.id} className='pushable mx-1' onClick={() => handleProject(work.id)}> <span className='front'>{work.id}</span></Button>
                        )}
                    </div>
                    {projectSelected && (
                        <div className='projects-card mt-3' key={projectSelected.id}>
                                <h5 className='mb-2'>{projectSelected.name}</h5>
                                <h6 className="mb-4">{projectSelected.company}</h6>
                                <p>
                                    {projectSelected.text}
                                </p>
                                <a href={projectSelected.link} target='_blank' rel='noreferrer'>VIEW HERE</a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects
