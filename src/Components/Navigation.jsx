import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCircle } from 'react-icons/fa';

const Navigation = () => {

    const navigate = useNavigate()

    const [homeOn, setHomeOn] = useState(true);
    const [projectsOn, setProjectsOn] = useState(false);
    const [worksOn, setWorksOn] = useState(false);
    const [contactOn, setContactOn] = useState(false);

    const handleHomeOn = (e) => {
        e.preventDefault();
        setHomeOn(true);
        setProjectsOn(false);
        setWorksOn(false);
        setContactOn(false);
        navigate('/');
    }

    const handleProjectsOn = (e) => {
        e.preventDefault();
        setHomeOn(false);
        setProjectsOn(true);
        setWorksOn(false);
        setContactOn(false);
        navigate('/projects');
    }

    const handleWorksOn = (e) => {
        e.preventDefault();
        setHomeOn(false);
        setProjectsOn(false);
        setWorksOn(true);
        setContactOn(false);
        navigate('/experience');
    }

    const handleContactOn = (e) => {
        e.preventDefault();
        setHomeOn(false);
        setProjectsOn(false);
        setWorksOn(false);
        setContactOn(true);
        navigate('/contact');
    }

    return(
        <>
            <h1>Martin del Rosario</h1>
            <h2>React Frontend developer</h2>

            <ul className='nav d-block'>
                <li><Link className='nav-link' onClick={handleHomeOn}>Home {homeOn ? <FaCircle className='nav-circle' /> : ""} </Link></li>
                <li><Link className='nav-link mt-1' onClick={handleProjectsOn}>Projects {projectsOn ? <FaCircle className='nav-circle' /> : ""}</Link></li>
                <li><Link className='nav-link mt-1' onClick={handleWorksOn}>Work Experience {worksOn ? <FaCircle className='nav-circle' /> : ""}</Link></li>
                <li><Link className='nav-link mt-1' onClick={handleContactOn}>Contact {contactOn ? <FaCircle className='nav-circle' /> : ""}</Link></li>
            </ul>
        </>
    )

}

export default Navigation