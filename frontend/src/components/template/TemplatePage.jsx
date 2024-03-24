import React from 'react';
import './TemplatePage.css'
import './Sidebar'
import InputField from './InputField';
import Datepicker from './DatePicker';


function TemplatePage() {
  return (
    <>
      <section className='main_sidesection'>




        <div className='main_container'>

          <div className="left_container">
            <div class="form-section_document-name__1euyJ">
              Alabama Power of Attorney (Financial)
            </div>

            <div class="form-section_sub-section-wrapper__28arK"><h2>Agent Info</h2></div>
            <form action="">

              <InputField title="Agent Name" />
              <InputField title="Address" />
              <InputField title="City" />
              <InputField title="Country" />
              
              <InputField title="Country" />
              <Datepicker title="datepicker" />
            </form>
            <footer class="form-control-panel_button-panel__34lpp">
              <div>
                <button data-id="back" type="button" class="Button-button-d0484b Button-link-778592">
                  <img src=""/>Back

                </button>
              </div>
              <div class="form-control-panel_button-group__1goiC">
                < button data-id="skip" type="button" class="Button-button-d0484b form-control-panel_btn-skip__3zOem Button-medium-afe9a1 Button-link-778592">Skip</button>
                <button data-id="next" type="submit" class="Button-button-d0484b Button-medium-afe9a1 Button-primary-233931">Next</button></div>
            </footer>


          </div>
          <div className='right_container'>
         


          <div class="builder-for-desktop_faq-wrapper__2Pii9"><section class="faq-section_faq-section__3vPoP"><h3>Who is the Agent?</h3><p>The "Agent", also known as the "Attorney-in-Fact" is a responsible and trustworthy person such as a relative, friend, lawyer, accountant, or professional.</p></section></div>

          </div>
        </div>
      </section>

    </>

  );
}

export default TemplatePage;
