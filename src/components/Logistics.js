import React, { useState } from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CreateIcon from '@mui/icons-material/Create';
import "./Logistics.css";

export const Logistics = () => {
  return (
    <>
      <div className="form-section-field">
        <div className="book-section">
          <DescriptionOutlinedIcon style={{ color: "deepskyblue" }} />
          <h3 style={{ color: "deepskyblue" }}>Logistics</h3>
        </div>
      </div>
      <div className="logistics-container">
        <div className="form-section-field">
          {/* Left Column */}
          <div className="form-column">
            <div className="form-group-field">
              <label>Destination</label>
              <input type="text" placeholder="Enter destination" />
            </div>
            <div className="form-group-field">
              <label>Shipping Mode</label>
              <select>
                <option>Road</option>
                <option>Air</option>
                <option>Sea</option>
              </select>
            </div>
            <div className="form-group-field">
              <label>Shipping Company</label>
              <div className="input-with-icon">
                <input type="text" placeholder="Select company" />
                {/* <button className="edit-button">✏️</button> */}
                <span className="add-icon">
                      <CreateIcon style={{ color: 'white' }} />
                    </span>
              </div>
            </div>
            <div className="form-group-field">
              <label>Shipping Tracking</label>
              <input type="text" placeholder="Enter tracking number" />
            </div>
            <div className="form-group-field">
              <label>Shipping Date</label>
              <input type="date" />
            </div>
            <div className="form-group-field">
              <label>Shipping Charges</label>
              <input type="number" defaultValue="0" />
            </div>
            <div className="form-group-field">
              <label>Vehicle/Vessel No</label>
              <input type="text" placeholder="Enter vehicle number" />
            </div>
            <div className="form-group-field">
              <label>Charge Type</label>
              <select>
                <option>Paid</option>
                <option>Unpaid</option>
              </select>
            </div>
            <div className="form-group-field">
              <label>Document Through</label>
              <input type="text" placeholder="Enter document details" />
            </div>
          </div>

          {/* Middle Column */}
          <div className="form-column">
            <div className="form-group-field">
              <label>Port of Landing</label>
              <input type="text" placeholder="Enter port details" />
            </div>
            <div className="form-group-field">
              <label>Port of Discharge</label>
              <input type="text" placeholder="Enter port details" />
            </div>
            <div className="form-group-field">
              <label>No of Packets</label>
              <input type="number" defaultValue="0" />
            </div>
            <div className="form-group-field">
              <label>Weight</label>
              <input type="number" defaultValue="0" />
            </div>
            <div className="form-group-field">
              <label>Distance</label>
              <input type="number" defaultValue="0" />
            </div>
            <div className="form-group-field">
              <label>eWay Invoice No</label>
              <input type="text" placeholder="Enter eWay invoice no" />
            </div>
            <div className="form-group-field">
              <label>eWay Invoice Date</label>
              <input type="date" />
            </div>
            <div className="form-group-field">
              <label>eWay Cancel Date</label>
              <input type="date" />
            </div>
            <div className="form-group-field">
              <label>IRN No</label>
              <input type="text" placeholder="Enter IRN no" />
            </div>
            <div className="form-group-field">
              <label>QR Code</label>
              <input type="text" placeholder="Enter QR code" />
            </div>
          </div>

          {/* Right Column */}
          <div className="form-column">
            <div style={{backgroundColor:"lightgrey" }}>
            <p style={{fontFamily:"sans-serif", fontSize:"30px", padding:"10px", margin:"0px"}}>Overhead Expense</p>
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Custom Duty</label>
              <input type="number" defaultValue="0.00" />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>CHA Payment</label>
              <input type="number" defaultValue="0.00" />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Freight</label>
              <input type="number" defaultValue="0.00" />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Insurance</label>
              <input type="number" defaultValue="0.00" />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Handling</label>
              <input type="number" defaultValue="0.00" />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Documentation Charges</label>
              <input type="number" defaultValue="0.00" />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Bank Charges</label>
              <input type="number" defaultValue="0.00" />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Custom Expenses</label>
              <input type="number" defaultValue="0.00" />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Loading/Unloading</label>
              <input type="number" defaultValue="0.00" />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Other Charges</label>
              <input type="number" defaultValue="0.00" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
