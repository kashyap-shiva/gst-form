import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./VendorForm.css";

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
  };

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
                <h3>Basic</h3>
                <div className="form-group">
                  <label>GST No</label>
                  <Field name="gstNo" className="form-control" />
                  <ErrorMessage
                    name="gstNo"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form-group">
                  <label>Name *</label>
                  <Field name="name" className="form-control" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label>Print Name *</label>
                  <Field name="printName" className="form-control" />
                  <ErrorMessage
                    name="printName"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form-group">
                  <label>Identification</label>
                  <Field name="identification" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Code *</label>
                  <Field name="code" className="form-control" />
                  <ErrorMessage name="code" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label>Under Ledger *</label>
                  <Field
                    name="underLedger"
                    as="select"
                    className="form-control"
                  >
                    <option value="">Select...</option>
                    <option value="ledger1">Ledger 1</option>
                    <option value="ledger2">Ledger 2</option>
                  </Field>
                  <ErrorMessage
                    name="underLedger"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form-group">
                  <label>
                    Vendor Common for Sales Purchase
                    <Field
                      type="checkbox"
                      name="vendorCommon"
                      className="form-checkbox"
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label>
                    Is Sub Vendor
                    <Field
                      type="checkbox"
                      name="isSubVendor"
                      className="form-checkbox"
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label>Firm Status</label>
                  <Field name="firmStatus" as="select" className="form-control">
                    <option value="None">None</option>
                    <option value="Proprietor">Proprietor</option>
                    <option value="Partnership">Partnership</option>
                  </Field>
                </div>

                <div className="form-group">
                  <label>Territory</label>
                  <Field name="territory" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Vendor Category</label>
                  <Field name="vendorCategory" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Contact Person</label>
                  <Field name="contactPerson" className="form-control" />
                </div>
              </div>
            </div>
            <div className="basic-section-profile">
              <h2>image</h2>
            </div>
          </div>

          {/* <div className="form-section">
            <h3>Statutory</h3>
            <div className="form-group">
              <label>Registration Date</label>
              <Field name="registrationDate" type="date" className="form-control" />
            </div>

            <div className="form-group">
              <label>GST Category</label>
              <Field name="gstCategory" as="select" className="form-control">
                <option value="Registered">Registered</option>
                <option value="Unregistered">Unregistered</option>
              </Field>
            </div>

            <div className="form-group">
              <label>GST Suspend</label>
              <Field type="checkbox" name="gstSuspend" className="form-checkbox" />
            </div>

            <div className="form-group">
              <label>CIN</label>
              <Field name="cin" className="form-control" />
            </div>
          </div> */}

          <button type="submit" className="submit-button">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default VendorForm;
