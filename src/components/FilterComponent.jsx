import React, {useState} from "react";
import { Dropdown } from "./Dropdown";
import { 
    inactiveFilterTitle, 
    activeFilterTitle, 
    applyFilterTitle, 
    clearFilterTitle, 
    categories,
    confection,
    gender,
    hairColor,
    hairLength,
    Looks,
    hairStyles,
    ageGroup,
    height
} from "../data/filter";
import "../styles/FilterComponent.scss";

export const FilterComponent = () => {
    const [isActiveFilter, setIsActiveFilter] = useState(true);

    const handleFilterButton = (e) => {
        e.preventDefault();
        setIsActiveFilter(!isActiveFilter);
    }

    return (
        <div className={isActiveFilter ? 'filter-container__active' : 'filter-container'}>
            <button 
                onClick={e => handleFilterButton(e)} 
                type="button" 
                className="filter-container__filter-buttons"
            >
                {isActiveFilter ? activeFilterTitle : inactiveFilterTitle}
            </button>
            {isActiveFilter && (
                <section className="filter-container__filter-form">
                    <section className="filter-form__fields-two-col">
                        <div className="dropdown">
                            <Dropdown 
                                name="Categories" 
                                options={categories} 
                                multiSelect={true} 
                            />
                        </div>
                        <div className="dropdown">
                            <Dropdown 
                                name="Confection" 
                                options={confection} 
                                multiSelect={true} 
                            />
                        </div>
                    </section>
                    <section className="filter-form__fields-three-col">
                        <div className="dropdown">
                            <Dropdown 
                                name="Gender" 
                                options={gender}  
                                multiSelect={false}
                            />
                        </div>
                        <div className="dropdown">
                            <Dropdown 
                                name="Hair colors"
                                options={hairColor}
                                multiSelect={true}
                            />
                        </div>
                        <div className="dropdown">
                            <Dropdown 
                                name="hair lengths"
                                options={hairLength}
                                multiSelect={true}
                            />
                        </div>
                    </section>
                    <section className="filter-form__fields-four-col">
                        <div className="dropdown">
                            <Dropdown
                                name="Looks"
                                options={Looks}
                                multiSelect={true}
                            />
                        </div>
                        <div className="dropdown">
                            <Dropdown
                                name="Hair styles"
                                options={hairStyles}
                                multiSelect={true}
                            />
                        </div>
                        <div className="dropdown">
                            <Dropdown 
                                name="Age group"
                                options={ageGroup}
                                multiSelect={true}
                            />
                        </div>
                        <div className="dropdown">
                            <Dropdown 
                                name="Height"
                                options={height}
                                multiSelect={true}
                            />
                        </div>
                    </section>
                    <section className="filter-form__fields-buttons">
                        <button className="fields-buttons__apply-filter">{applyFilterTitle}</button>
                        <button className="fields-buttons__clear-filter">{clearFilterTitle}</button>
                    </section>
                </section>
            )}
        </div>
    )
}