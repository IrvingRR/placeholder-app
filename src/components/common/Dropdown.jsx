import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { DropdrownContainer, Legend, Option, Options } from "../../styled/components/common/dropdown";

export const Dropdown = ({ label, options=[], maxWidth, setOption, value, register, defaultValue={}, ...props }) => {

    const [visibleOptions, setVisibleOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const dropdownRef = useRef();
    const listRef = useRef();

    useEffect(() => {
        setSelectedOption(value);
    }, [value]);

    window.addEventListener('click' , (e) => {
        if(e.target !== dropdownRef.current && e.target !== listRef.current) {
            setVisibleOptions(false);
        }
    });

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setOption(option);
    };

    return (
        <DropdrownContainer { ...props } ref={dropdownRef} onClick={() => setVisibleOptions(!visibleOptions)} max_widt={maxWidth}>
            { (defaultValue.label && !selectedOption.label) 
                ? defaultValue.label
                : selectedOption.label ? selectedOption.label : label
            }
            <BiChevronDown />
            <Options ref={listRef} visible={visibleOptions}>
                {options.length > 0
                    ? options.map((option, index) => (
                        <Option onClick={() => handleSelectOption(option)} key={`${option.label}-${index}`}>{option.label}</Option>
                    ))
                    : <Legend>No options</Legend>
                }
            </Options>
        </DropdrownContainer>
    );
};