import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./VendorForm.css";
import "./ToggleSwitch.css"
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PublicIcon from '@mui/icons-material/Public';
import ToggleSwitch from "./ToggleSwitch";
import CreateIcon from '@mui/icons-material/Create';
import { Logistics } from "./Logistics";

const VendorForm = () => {
    const initialValues = {
      gstNo: "",
      name: "",
      printName: "",
      identification: "",
      code: "",
      underLedger: "",
      vendorCommon: false,
      isSubVendor: false,
      firmStatus: "None",
      territory: "",
      vendorCategory: "",
      contactPerson: "",
      registrationDate: "",
      gstCategory: "Registered",
      gstSuspend: false,
      cin: "",
      image: null,
      logistics: {
        destination: "",
        shippingMode: "",
        shippingCompany: "",
        shippingTracking: "",
        shippingDate: "",
        shippingCharges: 0,
        vehicleNo: "",
        chargeType: "",
        documentThrough: "",
        portOfLanding: "",
        portOfDischarge: "",
        noOfPackets: 0,
        weight: 0,
        distance: 0,
        eWayInvoiceNo: "",
        eWayInvoiceDate: "",
        eWayCancelDate: "",
        irnNo: "",
        qrCode: "",
        overheadExpenses: {
          customDuty: 0,
          chaPayment: 0,
          freight: 0,
          insurance: 0,
          handling: 0,
          documentationCharges: 0,
          bankCharges: 0,
          customExpenses: 0,
          loadingUnloading: 0,
          otherCharges: 0,
        }
      }
    };

  const [toggle, setToggle] = useState({
    value: "",
    default: 'off',
    isOn: true
  })

  const validationSchema = Yup.object({
    gstNo: Yup.string().required("GST No is required"),
    name: Yup.string().required("Name is required"),
    printName: Yup.string().required("Print Name is required"),
    code: Yup.string().required("Code is required"),
    underLedger: Yup.string().required("Under Ledger is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form data", values);
  };

  const handleOnOffToggle = (e) => {
    console.log(e.target.value)
    let checkmeta = {
      isOn: !toggle.isOn,
      value: !toggle.isOn ? "ON" : "OFF"
    }
    setToggle({ ...toggle, ...checkmeta })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="vendor-form">
          <div className="basic-section">
            <div className="basic-section-details">
              <div className="form-section">
                <div className="book-section">
                  <AutoStoriesIcon style={{ color: 'deepskyblue' }} />
                  <h3 style={{ color: 'deepskyblue' }}>Basic</h3>
                </div>
                <div className="form-group">
                  <label>GST No</label>
                  <div style={{ display: "flex", width: "57.5%", justifyContent: "space-between" }}>
                    <Field name="gstNo" className="form-control custom-style" />
                    <button className="gst-btn">Fetch Info</button>
                  </div>

                </div>
                <ErrorMessage
                  name="gstNo"
                  component="div"
                  className="error"
                />
                <div className="form-group">
                  <label>Name *</label>
                  <div className="icon-input-field">
                    <Field name="name" className="form-control custom-field" />
                    <span className="add-icon">
                      <PublicIcon style={{ color: 'white' }} />
                    </span>
                  </div>
                </div>
                <ErrorMessage name="name" component="div" className="error" />

                <div className="form-group">
                  <label>Print Name *</label>
                  <Field name="printName" className="form-control" />
                </div>
                <ErrorMessage
                  name="printName"
                  component="div"
                  className="error"
                />

                <div className="form-group">
                  <label>Identification</label>
                  <Field name="identification" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Code *</label>
                  <div className="icon-input-field">

                    <Field name="code" className="form-control custom-field" />
                    <span className="add-icon">
                      <CreateIcon style={{ color: 'white' }} />
                    </span>
                  </div>
                </div>
                <ErrorMessage name="code" component="div" className="error" />

                <div className="form-group">
                  <label>Under Ledger *</label>
                  <div className="icon-input-field">
                    <Field
                      name="underLedger"
                      as="select"
                      className="form-control custom-select-field"
                    >
                      <option value="">Select...</option>
                      <option value="ledger1">Ledger 1</option>
                      <option value="ledger2">Ledger 2</option>
                    </Field>
                    <span className="add-icon">
                      <CreateIcon style={{ color: 'white' }} />
                    </span>
                  </div>

                </div>
                <ErrorMessage
                  name="underLedger"
                  component="div"
                  className="error"
                />

                <div className="form-group">
                  <label>
                    Vendor Common for Sales Purchase
                  </label>
                  <ToggleSwitch />
                </div>

                <div className="form-group">
                  <label>
                    Is Sub Vendor
                  </label>
                  <ToggleSwitch />

                </div>

                <div className="form-group">
                  <label>Firm Status</label>
                  <Field name="firmStatus" as="select" className="form-control custom-select-field-farm">
                    <option value="None">None</option>
                    <option value="Proprietor">Proprietor</option>
                    <option value="Partnership">Partnership</option>
                  </Field>
                </div>

                <div className="form-group">
                  <label>Territory</label>
                  <div style={{ width: "58%", display: "flex", justifyContent: "space-between" }}>
                    <Field
                      name="territory"
                      as="select"
                      className="form-control custom-select-field"
                    >
                      <option value="">Select...</option>
                      <option value="territory1">Territory 1</option>
                      <option value="territory2">Territory 2</option>
                    </Field>
                    <span className="add-icon">
                      <CreateIcon style={{ color: 'white' }} />
                    </span>
                  </div>

                </div>

                <div className="form-group">
                  <label>Vendor Category</label>
                  <div style={{ width: "58%", display: "flex", justifyContent: "space-between" }}>
                    <Field
                      name="vendorCategory"
                      as="select"
                      className="form-control custom-select-field"
                    >
                      <option value="">Select...</option>
                      <option value="Vendor Category 1">Vendor Category 1</option>
                      <option value="Vendor Category 2">Vendor Category 2</option>
                    </Field>
                    <span className="add-icon">
                      <CreateIcon style={{ color: 'white' }} />
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <label>Contact Person</label>
                  <Field name="contactPerson" className="form-control" />
                </div>
              </div>
            </div>
            <div className="basic-section-profile">
              <div style={{ width: "50%", marginTop: "10%" }}>
                <PersonIcon style={{ fontSize: 40, color: 'deepskyblue', height: "210px", width: "210px", backgroundColor: "lightgray" }} />
                <input
                 type="file" 
                 id="file" 
                 className="file-upload" 
                 accept="image/*" 
                 onChange={(event) => {
                   const file = event.currentTarget.files[0];
                   setFieldValue("image", file); 
                 }} 
                
                />
                <label htmlFor="file" className="custom-file-upload">Browse</label>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="book-section">
              <AutoStoriesIcon style={{ color: 'deepskyblue' }} />
              <h3 style={{ color: 'deepskyblue' }}>Statutory</h3>
            </div>
            <div className="statutory-main-div">
              <div className="statutory-inner-main-div">
                <div className="form-group">
                  <label>GST</label>
                  <Field name="gst" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Registeration Date</label>
                  <Field name="registeraion-date" className="form-control" type="date" />
                </div>
                <div className="form-group">
                  <label>CIN</label>
                  <Field name="cin" className="form-control" />
                </div>
              </div>
            <div className="statutory-inner-main-div">
                <div className="form-group">
                  <label>GST Category</label>
                  <Field name="gstCategory" className="form-control" />
                </div>
                  <div className="form-group">
                  <label>GST Suspend</label>
                  <Field name="cin" className="form-control gst-suspend" type="checkbox" />
                </div>
              </div>
             

            </div>
          </div>
          <Logistics setFieldValue={setFieldValue}/>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default VendorForm;