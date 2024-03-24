import PropTypes from 'prop-types';
import "./InputField.css";

const InputField = ({ title }) => {
  return (
    <section className="form-section_question-section__1E7Nj">
      <h3><div className="form-section_question-ask__2z7Oj">{title}</div></h3>
      <div className="text-input_container__crGA3">
        <div>
          <div className="Input-default">
            <input name="agent_name" type="text" placeholder="Enter full name" data-type="" className="Input-input-579a4a text-input_input__lnI9P" value="" />
          </div>
          <div className="Input-error-message-6da351"></div>
        </div>
      </div>
    </section>
  );
}

InputField.propTypes = {
  title: PropTypes.string.isRequired
};

export default InputField;
