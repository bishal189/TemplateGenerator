
import React, { useState } from 'react';
import './TemplatePage.css';
import './Sidebar';
import InputField from './InputField';
import Datepicker from './DatePicker';
import SideDescription from './SideDescription';

function TemplatePage() {
  const [step, setStep] = useState(0);

  const handleNextClick = () => {
    setStep(step + 1);
  };

  const handleBackClick = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSkipClick = () => {
    setStep(step + 1);
  };

  const steps = [
    {
      fields: [
        <InputField key="1" title="First Name"placeholder="Enter First Name" field="client_first_name" />,
        <InputField key="2" title="Middle Name" placeholder="Enter Middle Name" field="client_middle_name"/>,
        <InputField key="3" title="Last Name" placeholder="Enter Last Name" field="client_last_name"/>,
        <InputField key="4" title="Address"placeholder="Enter Street Address" field="client_address" />,
      ],
      title:"Who is the Agent?",
      description:'The "Agent", also known as the "Attorney-in-Fact" is a responsible and trustworthy person such as a relative, friend, lawyer, accountant, or professional.'

    },
    {
      fields: [
        <InputField key="5" placeholder="Enter City"title="City" field="client_city"/>,
        <InputField key="6" placeholder="Enter State" title="State"field="client_state" />,
        <Datepicker key="7" title="Date of birth(DOB)" field="bdate" />,
        <InputField key="8" placeholder="Enter Postal Code"title="Postal" field="client_postal"/>,
      ],
      title:'What information should I include about the receiving party?',
      description:"Include the receiving party's full name and address as part of the contact information to be listed on the document. The receiving party is the person or company who is promising not to disclose the confidential information or data that they receive."
    },
    {
      fields: [
        <InputField key="9" placeholder="Enter SS Number" title="SS Number " field="ss_number"/>,
        <InputField key="10" placeholder="Enter Account Detail"title="Account" field="account" />,
        <InputField key="10" placeholder="Enter Dispute Reason"title="Dispute Reason" field="dispute_reason_in_bullet_list" />,
      ],
      title:'Lease Types',
      description:`
      A Standard Lease has a fixed term that ends on a specific date. The length of time may be 6 months, 1 year, 2 years, etc. A lease agreement of 1 year or more MUST be in writing in order to comply with the law in most states.
      A Month-to-Month Lease means the lease continues for month-to-month periods until either the landlord or tenant terminates the agreement`
    }


  ];

  return (
    <>
      <section className='main_sidesection'>
        <div className='main_container'>
          <div className="left_container">
            <div className="form-section_document-name__1euyJ">
              Alabama Power of Attorney (Financial)
            </div>
            <div className="form-section_sub-section-wrapper__28arK"><h2>Agent Info</h2></div>
            <form action="">
              {steps[step].fields.map(field => field)}
            </form>
            <footer className="form-control-panel_button-panel__34lpp">
              <div>
                <button data-id="back" type="button" className="Button-button-d0484b Button-link-778592" onClick={handleBackClick}>
                  <img src="" alt=""/>Back
                </button>
              </div>
              <div className="form-control-panel_button-group__1goiC">
              {step !== steps.length - 1 && (
                  <button data-id="skip" type="button" onClick={handleSkipClick} className="Button-button-d0484b form-control-panel_btn-skip__3zOem Button-medium-afe9a1 Button-link-778592">Skip</button>
                )}
                  <button data-id="next" type="button" onClick={handleNextClick} className="Button-button-d0484b Button-medium-afe9a1 Button-primary-233931">  {step === steps.length - 1 ? 'Save' : 'Next'}</button>
              
              </div>
            </footer>
          </div>
          <div className='right_container'>
            <div className="builder-for-desktop_faq-wrapper__2Pii9">
            <SideDescription description={steps[step].description} title={steps[step].title} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TemplatePage;






