import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Contact from "../Pages/Contact"
import EmailSubmitted from "../Pages/EmailSubmitted"
import Home from "../Pages/Home"
import Projects from "../Pages/Projects"
import WorkExperience from "../Pages/WorkExperience"

const Public = () => {

    const navigate = useNavigate();

    useEffect(() => {
      navigate('/');
    }, []);

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<WorkExperience />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/contact/email-submitted' element={<EmailSubmitted />} />
        </Routes>
    )

}

export default Public