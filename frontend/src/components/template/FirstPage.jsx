import { useState } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types"; // Import PropTypes for prop type validation
import "./FirstPageStyles.css"; // Import your custom CSS file
import { MdDownload } from "react-icons/md";
import { HiPrinter } from "react-icons/hi2";
import Button from "react-bootstrap/Button";

// Preview component
function Preview({ text }) {
  return (
    <div className="tooltip-text">
      <div>{text}</div>
      {/* Conditionally render the button */}
      {text.includes("PDF") && <Button variant="primary">Download PDF</Button>}
      {text.includes("Word") && (
        <Button variant="primary">Download Word</Button>
      )}
      {text.includes("Print") && <Button variant="primary">Print</Button>}
    </div>
  );
}

// Prop type validation for Preview component
Preview.propTypes = {
  text: PropTypes.string.isRequired,
};

function FirstPage() {
  const [hoveredItem, setHoveredItem] = useState(""); // State to track hovered item
  const [showEsignConfirmation, setShowEsignConfirmation] = useState(false); // State to track E-Sign confirmation

  // Function to handle E-Sign click

  // Function to handle continuing with E-Sign
  const handleContinueEsign = () => {
    // Add your logic here to continue with E-Sign
   
    setShowEsignConfirmation(false); // Hide confirmation
  };

  // Function to handle canceling E-Sign
  const handleCancelEsign = () => {
    // Add your logic here to cancel E-Sign
   
    setShowEsignConfirmation(false); // Hide confirmation
  };

  return (
    <div className="table-container">
      {/* Wrap the table and dropdown inside a container */}
      <Table striped bordered hover className="custom-table">
        {/* Add custom class */}
        <thead>
          <tr>
            <td>
              <div
                className="tooltip-container"
                onMouseEnter={() => setHoveredItem("PDF")}
                onMouseLeave={() => setHoveredItem("")}
              >
                <MdDownload />
                PDF
                {hoveredItem === "PDF" && (
                  <Preview text="Download and Share your PDF" />
                )}
              </div>
            </td>
            <td>
              <div
                className="tooltip-container"
                onMouseEnter={() => setHoveredItem("Word")}
                onMouseLeave={() => setHoveredItem("")}
              >
                <MdDownload />
                Word
                {hoveredItem === "Word" && (
                  <Preview text="Download and Edit directly in Ms-Word" />
                )}
              </div>
            </td>
            <td>
              <div
                className="tooltip-container"
                onMouseEnter={() => setHoveredItem("Print")}
                onMouseLeave={() => setHoveredItem("")}
              >
                <HiPrinter />
                Print
                {hoveredItem === "Print" && <Preview text="My name is Print" />}
              </div>
            </td>
            <td>
              <div
                className="tooltip-container-esign"
                onClick={() => setShowEsignConfirmation(true)} // Show the confirmation buttons on click
                onMouseEnter={() => setHoveredItem("E-Sign")}
                onMouseLeave={() => setHoveredItem("")}
              >
                <HiPrinter />
                E-Sign
                <div
                  className={`tooltip-text-esign ${
                    showEsignConfirmation ? "active" : ""
                  }`}
                >
                  {/* Render the E-Sign confirmation buttons if showEsignConfirmation is true */}
                  {showEsignConfirmation && (
                    <div>
                      
                       <h2><b>Convert to PDF</b></h2> 
                        <p>
                         In order to e-sign your document, a copy
                        will be made in PDF format. Your original draft will
                        remain intact.
                      </p>
                      <Button variant="primary" className=".btn-primary" onClick={handleContinueEsign}>
                        Continue
                      </Button>
                      <Button variant="primary" className=".btn-primar"  onClick={handleCancelEsign}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </td>
          </tr>
        </thead>
      </Table>

      <Dropdown className="dropdown-container">
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <span className="dots">&#8942;</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Rename</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Duplicate</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Move to Trash</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FirstPage;
