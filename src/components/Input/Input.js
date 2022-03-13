import React from "react";
import DatePicker from "react-datepicker";
import "./Input.css";

const Input = ({ inp, dateChangeHandler, onChange }) => {
  const createInput = () => {
    switch (inp.inpType) {
      case "text":
        return (
          <div className="inp-wrapper">
            <input
              className={`form-input ${inp.error && "inp-error"}`}
              placeholder={inp.placeholder}
              value={inp.value}
              onChange={onChange}
              type={inp.type}
              name={inp.name}
            />
          </div>
        );
      case "date":
        return (
          <div className="inp-wrapper">
            <div>
              <DatePicker
                className={`form-input ${inp.error && "inp-error"}`}
                selected={inp.value}
                minDate={new Date()}
                onChange={(date) => dateChangeHandler(date)}
                placeholder={inp.placeholder}
              />
            </div>
          </div>
        );

      default:
        break;
    }
  };
  return (
    <div className="inp-wrapper">
      <label className={`${inp.error && "error-text"}`}>{inp.label}</label>
      {createInput()}
    </div>
  );
};

export default Input;
