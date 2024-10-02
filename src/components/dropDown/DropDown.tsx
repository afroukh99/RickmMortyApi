import { MdKeyboardArrowDown } from "react-icons/md"
import "./dropDown.scss"
import { useState } from "react";


const DropDown = (props : {label : string}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='dropDown'>
      <label className="dropDown__label" htmlFor="">{props.label}</label>
      <div onClick={() => setOpen(!open)}  className="dropDown__select">
        <input type="search"  className="dropDown__input" value="Select Gender"/>
        <MdKeyboardArrowDown className={`dropDown__arrow ${open && 'open'}`} />
      </div>
      {
        open &&
        <div className="dropDown__options">
          <span className="dropDown__option">Male</span>
          <span className="dropDown__option">Male</span>
        </div>
      }
    </div>
  )
}

export default DropDown