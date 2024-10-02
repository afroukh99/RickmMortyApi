import React from 'react'
import "./filterSection.scss"
import DropDown from '../dropDown/DropDown'

const FilterSection = () => {
    const dropdowns = ["Gender","Species","Status"]
  return (
    <div className='filter'>
{
    dropdowns.map((label) => (
        <DropDown key={label} label={label} />
    ))
}
    </div>
  )
}

export default FilterSection