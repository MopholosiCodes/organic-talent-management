import React from 'react'
import Select from 'react-select'

export const Dropdown = (props) => {
    const {options, multiSelect, name} = props;
    return (
        <Select 
            isMulti={multiSelect} 
            options={options} 
            placeholder={name}
        />
    )
}
