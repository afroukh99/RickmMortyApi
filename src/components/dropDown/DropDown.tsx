import { MdKeyboardArrowDown } from "react-icons/md";
import "./dropDown.scss";
import { useContext, useState } from "react";
import { FilterContext } from "../../context/FilterContext";

interface DropDownProps {
  label: string;
  options: string[];
}

const DropDown = (props: DropDownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(`Select ${props.label}`);
  const { setFilterItems } = useContext(FilterContext)

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setFilterItems((prev: any) => ({
      ...prev,
      [props.label.toLowerCase()]: option,
    }))
    setOpen(false);
  };



  return (
    <div className='dropDown'>
      <label className="dropDown__label" htmlFor="">{props.label}</label>
      <div onClick={() => setOpen(!open)} className="dropDown__select">
        <input
          type="text"
          className="dropDown__input"
          value={selectedOption}
          readOnly
        />
        <MdKeyboardArrowDown className={`dropDown__arrow ${open && 'open'}`} />
      </div>
      {open && (
        <div className="dropDown__options">
          {props.options.map((option, index) => (
            <span
              onClick={() => handleSelectOption(option)}
              key={index}
              className="dropDown__option"
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
