import  { useState } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import "./FirstPageStyles.css"; // Import your custom CSS file
import { MdDownload } from "react-icons/md";
import { HiPrinter } from "react-icons/hi2";


function FirstPage() {
  const [hoveredItem, setHoveredItem] = useState(""); // State to track hovered item

  return (
    <div className="table-container">
      {/* Wrap the table and dropdown inside a container */}
      <Table striped bordered hover className="custom-table">
        {/* Add custom class */}
        <thead>
          <tr>
            <td
              title={hoveredItem === "PDF" ? "Download and Share your PDF" : ""}
              onMouseEnter={() => setHoveredItem("PDF")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <MdDownload />
              PDF
            </td>
            <td
              title={hoveredItem === "Word" ? "My name is Word" : ""}
              onMouseEnter={() => setHoveredItem("Word")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <MdDownload />
              Word
            </td>
            <td
              title={hoveredItem === "Print" ? "My name is Print" : ""}
              onMouseEnter={() => setHoveredItem("Print")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <HiPrinter />
              Print
            </td>
            <td
              title={hoveredItem === "E-Sign" ? "My name is E-Sign" : ""}
              onMouseEnter={() => setHoveredItem("E-Sign")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <HiPrinter />
              E-Sign
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
