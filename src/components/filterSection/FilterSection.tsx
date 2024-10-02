import React from 'react';
import "./filterSection.scss";
import DropDown from '../dropDown/DropDown';

const FilterSection = () => {
  
  const optionsMap: { [key: string]: string[] } = {
    Gender: ["Male", "Female", "Genderless", "Unknown"],
    Species: ["Human", "Alien", "Humanoid", "Animal"],
    Status: ["Alive", "Dead", "Unknown"]
  };

  const labels = ["Gender", "Species", "Status"];

  return (
    <div className='filter'>
      {labels.map((label) => (
        <DropDown key={label} label={label} options={optionsMap[label]} />
      ))}
    </div>
  );
};

export default FilterSection;
