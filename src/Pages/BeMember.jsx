import React from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import Footer from "../Components/Footer";


const BeMember = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  return (
    <div className="about_main">
      <div className="be_main">
        <form action="" className="be_form">
          <h2 className="h2">Apply to Guardmaster Institute</h2>

          <div className="double">
            <div className="input">
              <label htmlFor="firstName">First Name</label>
              <input
                required
                type="text"
                name="firstName"
                id=""
                
              />
            </div>
            <div className="input">
              <label htmlFor="lasttName">Last Name</label>
              <input
                required
                type="text"
                name="lastName"
                id=""
          
              />
            </div>
          </div>
          <div className="double">
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                name="email"
                id=""
                
              />
            </div>
            <div className="phone">
                <label htmlFor="phone">Phone Number</label>
              <PhoneInput
                country={"ng"}
                specialLabel={''}
                inputStyle={{
                    
                   width: "100%"
                  }}
              
              />
            </div>
              
           
          </div>
          <div className="double tr">
            <div className="input">
              <label htmlFor="streetAddress">Street Address</label>
              <input
                required
                type="text"
                name="streetAddress"
                id=""
              
              />
            </div>
            <div className="input">
              <label htmlFor="streetNumber">Street Number</label>
              <input
                required
                type="number"
                name="streetNumber"
                id=""
         
              />
            </div>
          </div>
          <div className="double tri">
            <div className="input">
              <label htmlFor="City">City</label>
              <input
                required
                type="text"
                name="City"
                id=""
        
              />
            </div>
            <div className="input">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                required
                type="text"
                name="postalCode"
                id=""
               
              />
            </div>
          </div>
          <div className="double">
            <div className="input">
              <label htmlFor="Nationality">Nationality</label>
              <input
                required
                type="text"
                name="Nationality"
                id=""
              
              />
            </div>
            <div className="input">
              <label htmlFor="Country of Residence">Country of Residence</label>
              <input
                required
                type="number"
                name="Country of Residence"
                id=""
         
              />
            </div>
          </div>
          <div className="triple">
            <label htmlFor="day">Date Of Birth</label>
            <div>
            <div className="input">
              
              <select name="day" id="day" required>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div className="input">
              
              <select name="month" id="month" required>
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="input">
            
              <select name="year" id="year" required>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            </div>
            
          </div>
          <div className="radio">
           
            <div>
              <input type="radio" id="male" name="gender" value="male" required />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" required />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" id="other" name="gender" value="other" required />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <button>SUBMIT APPLICATION</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default BeMember;
