import { Route, Routes } from "react-router-dom"
import Contact from "../Pages/Contact"
import Home from "../Pages/Home"
import Projects from "../Pages/Projects"
import WorkExperience from "../Pages/WorkExperience"

const Public = () => {

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<WorkExperience />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )

}

export default Public