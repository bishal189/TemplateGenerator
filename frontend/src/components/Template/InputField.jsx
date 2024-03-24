import React from 'react'
import "./InputField.css"
const InputField = (props) => {
  return (
    <section class="form-section_question-section__1E7Nj">
    <h3><div class="form-section_question-ask__2z7Oj">{props.title}</div></h3>
    <div class="text-input_container__crGA3">
    
    <div>
    <div class="Input-default">
        <input onChange={(e)=>props.onChange(e)}  type="text" placeholder={props.placeholder} data-type="" className="Input-input-579a4a text-input_input__lnI9P" name={props.field} value={props.value[props.field]} />
    </div>
    <div class="Input-error-message-6da351">
    </div>
    
    </div>
    </div>
  </section>
  )
}

export default InputField
