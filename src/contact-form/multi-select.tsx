import React from "react";
import Select, { components, OptionProps, MultiValue, StylesConfig } from "react-select";

type DayOption = { value: string; label: string };

type DaysSelectProps = {
  days?: string[];                
  name?: string;                   
  defaultValues?: string[];      
  placeholder?: string;
  styles?: StylesConfig<DayOption, true>;
};

// Checkbox option renderer
const Option = (props: OptionProps<DayOption, true>) => {
  const { isSelected, label } = props;
  return (
    <components.Option {...props}>
      <input type="checkbox" checked={isSelected} readOnly style={{ marginRight: 8 }} />
      {label}
    </components.Option>
  );
};

export default function DaysSelect({
  days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  name = "preferredDays",
  defaultValues = [],
  placeholder = "Изберете ден",
  styles,
}: DaysSelectProps) {
  const options = React.useMemo<DayOption[]>(
    () => days.map((d) => ({ value: d, label: d })),
    [days]
  );

  const defaultValue = React.useMemo<DayOption[]>(
    () => options.filter((o) => defaultValues.includes(o.value)),
    [options, defaultValues]
  );

  const [value, setValue] = React.useState<MultiValue<DayOption>>(defaultValue);

  return (
    <div className='dropdown-container'>
      <Select<DayOption, true>
        inputId={`${name}-select`}
        options={options}
        value={value}
        onChange={(vals) => setValue(vals)}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{ Option }}
        placeholder={placeholder}
        classNamePrefix="rs"
        styles={styles}
      />

      {/* Hidden inputs so HTML form posts preferredDays[] like checkboxes */}
      {value.map((v) => (
        <input key={v.value} type="hidden" name={`${name}[]`} value={v.value} />
      ))}
    </div>
  );
}
