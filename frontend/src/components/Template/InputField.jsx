
import PropTypes from 'prop-types';

import "./InputField.css";

const InputField = (props) => {
  return (
    <section className="form-section_question-section__1E7Nj">
      <h3><div className="form-section_question-ask__2z7Oj">{props.title}</div></h3>
      <div className="text-input_container__crGA3">
        <div>
          <div className="Input-default">
            <input 
              onChange={(e) => props.onChange(e)}  
              type="text" 
              placeholder={props.placeholder} 
              data-type="" 
              className="Input-input-579a4a text-input_input__lnI9P" 
              name={props.field} 
              value={props.value[props.field]} 
            />
          </div>
          <div className="Input-error-message-6da351">
          </div>
        </div>
      </div>
    </section>
  );
}

InputField.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired // Add value to propTypes
};

export default InputField;
