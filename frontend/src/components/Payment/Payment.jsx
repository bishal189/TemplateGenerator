import Header from "./Header";
import "./Payment.css";
import { useState } from "react";
import Premium from "./Premium";
import Freetrial from "./Freetrial";
import Inputform from "./Inputform";

const Payment = () => {
  const [clickedDiv, setIsClicked] = useState(0);
  const handleClick = (index) => {
    setIsClicked(index);
  };

  return (
    <>
      <div className="main_payment">
        <Header className="header" />
        <h1>
          Print and download your
          <br />
          Lease/Rental Agreement
        </h1>

        <div className="curve"></div>

        <h3>4M+ legal documents created since 2015</h3>

        <div className="payment_container">
          <div className="inner_container">
            <h2>1. Choose your plan type</h2>
            <div className="trial_container">
              <Premium handleClick={handleClick} clickedDiv={clickedDiv} />
              <Freetrial handleClick={handleClick} clickedDiv={clickedDiv} />

              <h2>
                2. Enter your payment information
                <div className="card_payment">
                  <img src="https://legaltemplates.net/payment/static/media/icon-visa.ca5ee847.svg" />
                  <img src="https://legaltemplates.net/payment/static/media/icon-master.f3918891.svg" />
                  <img src="https://legaltemplates.net/payment/static/media/icon-amex.b8db690f.svg" />
                </div>
              </h2>

              <div className="payment_form">
                <h4>Billing Account Information</h4>
                <Inputform />
                <div className="country">
                  <label className="label" htmlFor="">
                    country
                  </label>
                  <select id="country" name="country">
                    <option value="" disabled="">
                      Country
                    </option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia, Plurinational State of</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="CI">Côte Ivoire</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">Macedonia, Republic of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="QA">Qatar</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="RE">Réunion</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin (French part)</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten (Dutch part)</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="UM">
                      United States Minor Outlying Islands
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">
                      Venezuela, Bolivarian Republic of
                    </option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.S</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                    <option value="AX">Åland Islands</option>
                  </select>
                </div>
                <h4>
                  Credit Card Details
                  <div className="logodiv">
                    <div
                      className="trustedsite"
                      data-type="213"
                      data-width="120"
                      data-height="50"
                      title="TrustedSite Certified"
                      tabIndex="0"
                      id="trust"
                    ></div>
                  </div>
                </h4>

                <div className="credit_form">
                  <div className="inner_credit_form">
                    <div className="main_credit">
                      <Inputform />
                    </div>
                  </div>
                </div>

                <div className="cardnumber">
                  <div className="innercardnumber">
                    <label htmlFor="">Card Number</label>
                    <div className="innercarddiv">
                      <div className="iframediv">
                        <iframe
                          className="iframe"
                          scrolling="no"
                          name="362a0193-4937-4d9c-92b3-a967b666c887"
                          src="https://cdn.safecharge.com/safecharge_resources/v1/websdk/sfc_inner_card.html?v1.136.0"
                          title="SFC secure field"
                          id="_card"
                          allow="shared-autofill"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info">
                  <div className="billsummary">Bill Summary</div>
                  <div className="traildiv">
                    <div className="premiumtrial">Premium Trail</div>
                    <div className="premiumtrial right">$1</div>
                  </div>

                  <div className="totalamount">
                    <div className="teext">Total Amount</div>
                    <div className="price">$1</div>
                  </div>
                  <div className="stylerow"></div>
                  <div className="styledisclaimer">
                    <p>
                      At the end of your introductory period, continue on the
                      daily low rate of $1.43.
                    </p>
                    <p>
                      By placing your order, you agree to the{" "}
                      <a
                        href="https://legaltemplates.net/terms-of-use/"
                        target="_blank"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://legaltemplates.net/privacy-policy/"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                      , and the billing terms outlined below. By completing your
                      purchase, you agree to have the above card automatically
                      charged upon renewal.
                    </p>
                  </div>
                  <div className="buttoncontainer">
                    <button
                      type="button"
                      data-id="place-order"
                      className="button-submit"
                      style={{ background: "#4b62f9" }}
                    >
                      <div className="premium-cover">
                        <span style={{ color: "#fff" }}>Start My Trial</span>
                        <span style={{ color: "#fff" }}>
                          Cancel anytime, for any reason
                        </span>
                      </div>
                    </button>
                    <p className="paragraph">
                      Legaltemplates.net digital subscription is a credit card
                      only offer. Your credit card will automatically be charged
                      in advance every month unless a different term is
                      specified in the offer.{" "}
                      <b>
                        At the end of your introductory period, you will
                        continue to be charged every month for $39.95
                        ($1.43/day) unless you cancel your subscription.
                      </b>{" "}
                      Trial offer can only be claimed one time. Prices subject
                      to change. Additional terms and conditions may apply. All
                      purchases are subject to the Terms of Service and Privacy
                      Policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          Copyright 2024 Legal Templates Incorporated. Legal Templates LLC is
          not a lawyer, a law firm and does not engage in the practice of law.
          Legal Templates cannot and does not provide legal advice or<br/> legal
          representation. All information, software and services provided on the
          site are for informational purposes and self-help only and are not
          intended to be a substitute for a lawyer or<br/> professional legal advice.
          Use of this site is subject to our Terms of Use.<br/><br/> Legal Templates is a
          group of companies and consist of :<br/> U.S.: Legal Templates LLC, 4023
          Kennett Pike #57884 Wilmington, DE 19807
        </div>
      </div>
    </>
  );
};

export default Payment;
