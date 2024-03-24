import React, { useState } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './InputField.css';

const Datepicker = (props) => {

  const handleDateChange = (date) => {
    props.setSelectedDate(date)
      const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}-${date.getFullYear()}`;
      console.log(formattedDate)
    props.setClientData((prev)=>({
      ...prev,
      'bdate':formattedDate
    }));

  };

  return (
    <section className="form-section_question-section__1E7Nj">
      <h3>
        <div className="form-section_question-ask__2z7Oj">{props.title}</div>

      </h3>
      <div className="text-input_container__crGA3">
        <div>
          <div className="Input-default">
            <DatePicker
              name={props.field}
              selected={props.selectedDate}

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


Datepicker.propTypes = {
  title: PropTypes.string.isRequired // Define the prop types
};


export default Datepicker;
