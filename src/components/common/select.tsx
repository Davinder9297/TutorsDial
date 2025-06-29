import React, { useEffect, useRef, useState } from "react";
import InputField from "./input";

interface OptionType {
  id: string;
  title: string;
}

interface CustomSelectProps {
  label: string;
  labelProps?: string;
  options: OptionType[];
  placeholder?: string;
  classname?: string;
  optionStyle?: string;
  value?: string;
  onChange?: (value: string, isCustom: boolean) => void;
  enableOther?: boolean;
}

const CustomSelect = ({
  placeholder = "Select...",
  classname,
  label,
  labelProps,
  options,
  optionStyle,
  value,
  onChange,
  enableOther = false,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customInputValue, setCustomInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // NEW: search query

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options?.find((option) => option?.id === value);
  const displayValue = selectedOption ? selectedOption.title : value || placeholder;

  // Filtered options based on search
  const filteredOptions = options?.filter((option) =>
    option?.title?.toLowerCase()?.includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`custom-select-container ${classname}`}>
      {label && <p className={`text-lg font-semibold mb-3 ${labelProps}`}>{label}</p>}

      <div
        ref={dropdownRef}
        className={`relative w-full border border-gray-300 rounded-md ${optionStyle}`}
      >
        <div
          className="p-2 text-black cursor-pointer flex justify-between items-center"
          onClick={() => {
            setIsOpen(!isOpen);
            setSearchQuery("");
          }}
        >
          <span
            className={`
      ${!selectedOption && !value ? "text-[#A0A5B1]" : "text-black font-semibold"}
    `}
          >
            {displayValue}
          </span>
          <svg
            className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {isOpen && (
          <div
            className="absolute w-full max-h-60 overflow-y-auto border border-gray-300 mt-1 bg-white z-10"
            style={{ maxHeight: "300px" }}
          >
            {/* Search Input */}
            <div className="p-2">
              <InputField
                placeholder="Search..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}

                className="w-full border border-gray-300 rounded-sm  !placeholder-[#A0A5B1]"
                inputStyle="py-2 rounded-sm !-mb-0"
              />
              {/* <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              /> */}
            </div>

            {/* Filtered Options */}
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-100 "
                  onClick={() => {
                    onChange?.(option.id, false);
                    setShowCustomInput(false);
                    setIsOpen(false);
                  }}
                >
                  {option.title}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-400">No options found</div>
            )}

            {/* "Other" option */}
            {enableOther && (
              <div
                className="p-2 cursor-pointer hover:bg-black/90 text-black"
                onClick={() => {
                  setShowCustomInput(true);
                  setIsOpen(false);
                  onChange?.("", true);
                }}
              >
                Others
              </div>
            )}
          </div>
        )}
      </div>

      {/* Custom Input for 'Others' */}
      {showCustomInput && (
        <div className="mt-2">
          <input
            type="text"
            placeholder="Please specify..."
            value={customInputValue}
            onChange={(e) => {
              const val = e.target.value;
              setCustomInputValue(val);
              onChange?.(val, true);
            }}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
