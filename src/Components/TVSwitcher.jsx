import { useState } from "react"
import { ImSwitch } from 'react-icons/im';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Clock from "./Clock";
import { Link } from "react-router-dom";

const TVSwitcher = ({children}) => {

  const [isOn, setIsOn] = useState(false);

  const on = () => {
    setIsOn(true);
  }

  const off = () => {
    setIsOn(false);
  }

  return(
    <>
      <div>
        {isOn && <div className='cover'>{children}</div>}
        <div className='switch d-flex align-items-center'>
          {isOn &&
            <>
              <Clock />
              <a href='http://github.com/mdr-23' target='_blank' rel='noopener noreferrer'><FaGithub className='switch-on' /></a>
              <a href='https://www.linkedin.com/in/martin-delrosario/' target='_blank' rel='noopener noreferrer'><FaLinkedin className='switch-on mx-2' /> </a>
            </>         
          }
          {!isOn
           ? <div onClick={on}><ImSwitch className='switch-off' /></div>
           : <div onClick={off}><ImSwitch className='switch-on' /></div>
          }
        </div>
      </div>
    </>
  )
}

export default TVSwitcher;
