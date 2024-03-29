import React, { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa6";
import './LeaseAgg.css';

const LeaseAgg = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [seeOptions, setSeeOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(prevState => !prevState);
  };

  const toggle1Options = () => {
    setSeeOptions(prevState => !prevState);
  };

  return (
    <div>
      <div className="wrap">
        <p className="para1">
          <span><a href="#home">Home</a></span> <FaAngleRight />
          <span><a href="#Lease aggrement">Real state</a></span> <FaAngleRight />
          <span>Lease Agreements</span>
        </p>
      </div>

      <div className="page-flex">
        <div>
          <div className="heading2">
            <h1 className="heading2">Rental And Lease Aggrements</h1>
            <h1 className="heading2">Templates</h1>
          </div>
          <div className="para2">
            <p className="para2">Use our Lease Agreement to rent out your residential property.</p>
          </div>

          <div className="button-flex">
            <div>
              <button className="button1" id="optionsButton" onClick={toggleOptions}>
                Standard Lease Agreement <span className="arrow"><SlArrowDown /></span>
              </button>

              {showOptions && (
                <div className="options1Container">
                  <ul className="options1List">
                    <li>Select document</li>
                    <li><a href="#standard lease agreements">Standard lease agreements</a></li>
                    <li><a href="#standard lease agreements">Standard lease agreements</a></li>
                    <li><a href="#standard lease agreements">Standard lease agreements</a></li>
                    <li><a href="#standard lease agreements">Standard lease agreements</a></li>

                  </ul>
                </div>
              )}
            </div>

            <div >
              <button className='button' type='submit'>
                <span>Create Documents.</span>
              </button>

            </div>
          </div>
        </div>

        {/* <div>
          <button className="document-sidebar" type="button">
            <img className="image" width="240" height="310" src="https://legaltemplates.net/wp-content/uploads/Standard-Lease-Agreement-240x310.png" alt="Standard Lease Agreement" loading="eager" />
            <p>Create Your Lease Agreement in Minutes!</p>

            <div>
              <button className="button1" id="optionsButton" onClick={toggle1Options}>
                Standard Lease Agreement <span className="arrow"><SlArrowDown /></span>
              </button>

              {seeOptions && (
                <div className="optionsContainer">
                  <ul className="optionsList">
                    <li><a href="#select documents">Select document</a></li>
                    <li><a href="#standard lease agreements">Standard lease agreements</a></li>
                    <li><a href="#standard lease agreements">Standard lease agreements</a></li>
                    <li><a href="#standard lease agreements">Standard lease agreements</a></li>
                    <li><a href="#standard lease agreements">Standard lease agreements</a></li>
                    <li><a href="#standard lease agreements">Standard lease agreements</a></li>
                  </ul>
                </div>
              )}
            </div>
          </button>
        </div> */}
      </div>
    </div >
  );
}

export default LeaseAgg;
