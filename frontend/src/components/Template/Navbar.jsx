import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="white-bar-container">
            <div className='first'>

                <div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.63501 12.75H13.365V14.01H4.63501V12.75ZM13.365 7.125L9.00001 11.49L4.63501 7.125H7.12501V3.375H10.875V7.125H13.365Z" fill="#283250" fillOpacity="0.54"></path>
                        <mask id="mask0_410_1311" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="4" y="3" width="10" height="12"><path fillRule="evenodd" clipRule="evenodd" d="M4.63501 12.75H13.365V14.01H4.63501V12.75ZM13.365 7.125L9.00001 11.49L4.63501 7.125H7.12501V3.375H10.875V7.125H13.365Z" fill="white"></path></mask>
                        <g mask="url(#mask0_410_1311)"></g>
                    </svg>
                </div>
                <div>PDF</div>

            </div>
            <div className='second'>
                <div>      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.63501 12.75H13.365V14.01H4.63501V12.75ZM13.365 7.125L9.00001 11.49L4.63501 7.125H7.12501V3.375H10.875V7.125H13.365Z" fill="#283250" fillOpacity="0.54"></path>
                    <mask id="mask0_410_1311" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="4" y="3" width="10" height="12"><path fillRule="evenodd" clipRule="evenodd" d="M4.63501 12.75H13.365V14.01H4.63501V12.75ZM13.365 7.125L9.00001 11.49L4.63501 7.125H7.12501V3.375H10.875V7.125H13.365Z" fill="white"></path></mask>
                    <g mask="url(#mask0_410_1311)"></g>
                </svg></div>
                <div>Word</div>
            </div>

            <div className='third'>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Icon/24/print"><g id="local_printshop-24px"><path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M19 8H5C3.34 8 2 9.34 2 11V17H6V21H18V17H22V11C22 9.34 20.66 8 19 8ZM16 19H8V14H16V19ZM19 12C18.45 12 18 11.55 18 11C18 10.45 18.45 10 19 10C19.55 10 20 10.45 20 11C20 11.55 19.55 12 19 12ZM18 3H6V7H18V3Z" fill="#283250" fill-opacity="0.54"></path></g></g></svg>
                </div>
                <div>
                    Print
                </div>

            </div>

            <div className='fourth'>

                <div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.44238 5.1675C3.96738 4.635 4.49238 4.155 4.72488 4.2525C5.09988 4.4025 4.72488 5.025 4.49988 5.3925C4.31238 5.7075 2.35488 8.31 2.35488 10.125C2.35488 11.085 2.71488 11.88 3.35988 12.36C3.92238 12.78 4.66488 12.9075 5.33988 12.705C6.14238 12.4725 6.80238 11.655 7.63488 10.6275C8.54238 9.51 9.75738 8.0475 10.6949 8.0475C11.9174 8.0475 11.9324 8.805 12.0149 9.39C9.17988 9.87 7.97988 12.1425 7.97988 13.4175C7.97988 14.6925 9.05988 15.735 10.3874 15.735C11.6099 15.735 13.6049 14.7375 13.9049 11.16H15.7499V9.285H13.8974C13.7849 8.0475 13.0799 6.135 10.8749 6.135C9.18738 6.135 7.73988 7.5675 7.16988 8.265C6.73488 8.8125 5.62488 10.125 5.45238 10.305C5.26488 10.53 4.94238 10.935 4.61988 10.935C4.28238 10.935 4.07988 10.3125 4.34988 9.495C4.61238 8.6775 5.39988 7.35 5.73738 6.855C6.32238 6 6.71238 5.415 6.71238 4.395C6.71238 2.7675 5.48238 2.25 4.82988 2.25C3.83988 2.25 2.97738 3 2.78988 3.1875C2.51988 3.4575 2.29488 3.6825 2.12988 3.885L3.44238 5.1675ZM10.4099 13.9125C10.1774 13.9125 9.85488 13.7175 9.85488 13.3725C9.85488 12.9225 10.4024 11.7225 12.0074 11.3025C11.7824 13.32 10.9349 13.9125 10.4099 13.9125Z" fill="#283250" fill-opacity="0.54"></path></svg>
                </div>
                <div>
                    Print
                </div>
            </div>
        
        </div>
    );
};

export default Navbar;
