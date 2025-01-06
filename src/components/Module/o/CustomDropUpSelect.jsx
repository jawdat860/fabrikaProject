import React, { useState, useRef, useEffect } from 'react';
import './CustomDropUpSelect.css';

const CustomDropUpSelect = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropUp, setIsDropUp] = useState(false); // State to manage drop-up/drop-down
  const [selectedOption, setSelectedOption] = useState(value || "");
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) && !triggerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check if there is enough space to open the dropdown upwards
  const handleDropdownPosition = () => {
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - triggerRect.bottom;
    
    if (spaceBelow < 150) { // if not enough space, open upwards
      setIsDropUp(true);
    } else {
      setIsDropUp(false);
    }
  };

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    handleDropdownPosition(); // Recheck dropdown position
  };

  // Handle option selection
  const handleSelect = (option) => {
    setSelectedOption(option);
    onChange(option); // pass the selected option to the parent component
    setIsOpen(false); // close the dropdown
  };

  return (
    <div className="custom-dropup-select" ref={dropdownRef}>
      <div
        className="custom-dropup-select-trigger"
        ref={triggerRef}
        onClick={toggleDropdown}
      >
        {selectedOption || placeholder}
      </div>
      {isOpen && (
        <div className={`custom-dropup-select-options ${isDropUp ? 'dropup' : 'dropdown'}`}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`custom-dropup-select-option ${
                option === selectedOption ? 'active' : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropUpSelect;
