import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './InputField.css';

const Datepicker = ({ title }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <section className="form-section_question-section__1E7Nj">
      <h3>
        <div className="form-section_question-ask__2z7Oj">{title}</div>
      </h3>
      <div className="text-input_container__crGA3">
        <div>
          <div className="Input-default">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy" // Adjust as needed
              placeholderText="Enter Date of Birth"
              className="text-input_input__lnI9P date-picker-input"
            />
          </div>
          <div className="Input-error-message-6da351"></div>
        </div>
      </div>
    </section>
  );
};

export default Datepicker;
