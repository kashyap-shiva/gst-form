import React, { useState } from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CreateIcon from '@mui/icons-material/Create';
import "./Logistics.css";

export const Logistics = ({setFieldValue}) => {
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
              <input type="text" placeholder="Enter destination"  onChange={(e) => setFieldValue('logistics.destination', e.target.value)}/>
            </div>
            <div className="form-group-field">
              <label>Shipping Mode</label>
              <select onChange={(e) => setFieldValue('logistics.shippingMode', e.target.value)}>
                <option>Road</option>
                <option>Air</option>
                <option>Sea</option>
              </select>
            </div>
            <div className="form-group-field">
              <label>Shipping Company</label>
              <div className="input-with-icon">
                <input type="text" placeholder="Select company" onChange={(e) => setFieldValue('logistics.shippingCompany', e.target.value)}/>
                {/* <button className="edit-button">✏️</button> */}
                <span className="add-icon create-icon">
                      <CreateIcon style={{ color: 'white' }} />
                    </span>
              </div>
            </div>
            <div className="form-group-field">
              <label>Shipping Tracking</label>
              <input type="text" placeholder="Enter tracking number" onChange={(e) => setFieldValue('logistics.shippingTracking', e.target.value)}/>
            </div>
            <div className="form-group-field">
              <label>Shipping Date</label>
              <input type="date" onChange={(e) => setFieldValue('logistics.shippingDate', e.target.value)} />
            </div>
            <div className="form-group-field">
              <label>Shipping Charges</label>
              <input type="number" defaultValue="0" onChange={(e) => setFieldValue('logistics.shippingCharges', e.target.value)}/>
            </div>
            <div className="form-group-field">
              <label>Vehicle/Vessel No</label>
              <input type="text" placeholder="Enter vehicle number" onChange={(e) => setFieldValue('logistics.vehicleNo', e.target.value)} />
            </div>
            <div className="form-group-field">
              <label>Charge Type</label>
              <select onChange={(e) => setFieldValue('logistics.chargeType', e.target.value)}>
                <option>Paid</option>
                <option>Unpaid</option>
              </select>
            </div>
            <div className="form-group-field">
              <label>Document Through</label>
              <input type="text" placeholder="Enter document details" onChange={(e) => setFieldValue('logistics.documentThrough', e.target.value)} />
            </div>
          </div>

          {/* Middle Column */}
          <div className="form-column">
            <div className="form-group-field">
              <label>Port of Landing</label>
              <input type="text" placeholder="Enter port details" onChange={(e) => setFieldValue('logistics.portOfLanding', e.target.value)} />
            </div>
            <div className="form-group-field">
              <label>Port of Discharge</label>
              <input type="text" placeholder="Enter port details" onChange={(e) => setFieldValue('logistics.portOfDischarge', e.target.value)} />
            </div>
            <div className="form-group-field">
              <label>No of Packets</label>
              <input type="number" defaultValue="0" onChange={(e) => setFieldValue('logistics.noOfPackets', e.target.value)}/>
            </div>
            <div className="form-group-field">
              <label>Weight</label>
              <input type="number" defaultValue="0" onChange={(e) => setFieldValue('logistics.weight', e.target.value)} />
            </div>
            <div className="form-group-field">
              <label>Distance</label>
              <input type="number" defaultValue="0" onChange={(e) => setFieldValue('logistics.distance', e.target.value)} />
            </div>
            <div className="form-group-field">
              <label>eWay Invoice No</label>
              <input type="text" placeholder="Enter eWay invoice no"  onChange={(e) => setFieldValue('logistics.eWayInvoiceNo', e.target.value)}/>
            </div>
            <div className="form-group-field">
              <label>eWay Invoice Date</label>
              <input type="date" onChange={(e) => setFieldValue('logistics.eWayInvoiceDate', e.target.value)} />
            </div>
            <div className="form-group-field">
              <label>eWay Cancel Date</label>
              <input type="date" onChange={(e) => setFieldValue('logistics.eWayCancelDate', e.target.value)}/>
            </div>
            <div className="form-group-field">
              <label>IRN No</label>
              <input type="text" placeholder="Enter IRN no" onChange={(e) => setFieldValue('logistics.irnNo', e.target.value)}/>
            </div>
            <div className="form-group-field">
              <label>QR Code</label>
              <input type="text" placeholder="Enter QR code" onChange={(e) => setFieldValue('logistics.qrCode', e.target.value)}/>
            </div>
          </div>

          {/* Right Column */}
          <div className="form-column">
            <div style={{backgroundColor:"lightgrey" }}>
            <p style={{fontFamily:"sans-serif", fontSize:"30px", padding:"10px", margin:"0px"}}>Overhead Expense</p>
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Custom Duty</label>
              <input type="number" defaultValue="0.00" onChange={(e) => setFieldValue('logistics.overheadExpenses.customDuty', e.target.value)} />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>CHA Payment</label>
              <input type="number" defaultValue="0.00" onChange={(e) => setFieldValue('logistics.overheadExpenses.chaPayment', e.target.value)} />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Freight</label>
              <input type="number" defaultValue="0.00" onChange={(e) => setFieldValue('logistics.overheadExpenses.freight', e.target.value)} />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Insurance</label>
              <input type="number" defaultValue="0.00" onChange={(e) => setFieldValue('logistics.overheadExpenses.insurance', e.target.value)}/>
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Handling</label>
              <input type="number" defaultValue="0.00" onChange={(e) => setFieldValue('logistics.overheadExpenses.handling', e.target.value)} />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Documentation Charges</label>
              <input type="number" defaultValue="0.00" onChange={(e) => setFieldValue('logistics.overheadExpenses.documentationCharges', e.target.value)} />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Bank Charges</label>
              <input type="number" defaultValue="0.00" onChange={(e) => setFieldValue('logistics.overheadExpenses.bankCharges', e.target.value)}/>
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Custom Expenses</label>
              <input type="number" defaultValue="0.00" onChange={(e) => setFieldValue('logistics.overheadExpenses.customExpenses', e.target.value)} />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Loading/Unloading</label>
              <input type="number" defaultValue="0.00" onChange={(e) => setFieldValue('logistics.overheadExpenses.loadingUnloading', e.target.value)}   />
            </div>
            <div className="form-group-field form-group-field-expense">
              <label>Other Charges</label>
              <input type="number" defaultValue="0.00" onChange={(e) => setFieldValue('logistics.overheadExpenses.otherCharges', e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};