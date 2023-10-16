import { useState } from "react"
import { Button } from "react-bootstrap";
import { ImSwitch } from 'react-icons/im';
import Clock from "./Clock";

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
          <Clock />
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
