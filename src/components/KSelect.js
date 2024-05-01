import Select from "react-select";
import { Colors, Fonts } from "../constants/theming";

const KSelect = ({ placeholder = "label", options, value, setValue }) => {
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? Colors.barberry : Colors.bandicoot,
      backgroundColor: "white",
      fontFamily: `${Fonts.montserrat}`,
      "&:hover": {
        backgroundColor: `${Colors.tuatara}`,
        color: "white",
      },
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "white",
      padding: "0.25rem 1.25rem",
      border: `2px solid ${Colors.barberry}`,
      borderRadius: 12,
      boxShadow: "none",
      fontFamily: `${Fonts.montserrat}`,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "&:hover": {
        border: `2px solid black`,
      },
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: Colors.mineshaft,
    }),
  };

  return (
    <Select
      placeholder={placeholder}
      defaultValue={value}
      onChange={(option) => setValue(option.value)}
      options={options}
      styles={customStyles}
    />
  );
};

export default KSelect;
